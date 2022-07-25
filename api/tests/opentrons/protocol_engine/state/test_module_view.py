"""Tests for module state accessors in the protocol engine state store."""
import pytest
from pytest_lazyfixture import lazy_fixture  # type: ignore[import]

from contextlib import nullcontext as does_not_raise
from typing import ContextManager, Dict, NamedTuple, Optional, Type, Union

from opentrons_shared_data import load_shared_data
from opentrons.types import DeckSlotName
from opentrons.protocol_engine import errors
from opentrons.protocol_engine.types import (
    LoadedModule,
    DeckSlotLocation,
    ModuleDefinition,
    ModuleModel,
)
from opentrons.protocol_engine.state.modules import (
    ModuleView,
    ModuleState,
    HardwareModule,
)

from opentrons.protocol_engine.state.module_substates import (
    HeaterShakerModuleSubState,
    HeaterShakerModuleId,
    MagneticModuleSubState,
    MagneticModuleId,
    TemperatureModuleSubState,
    TemperatureModuleId,
    ThermocyclerModuleSubState,
    ThermocyclerModuleId,
    ModuleSubStateType,
)


def make_module_view(
    slot_by_module_id: Optional[Dict[str, Optional[DeckSlotName]]] = None,
    hardware_by_module_id: Optional[Dict[str, HardwareModule]] = None,
    substate_by_module_id: Optional[Dict[str, ModuleSubStateType]] = None,
) -> ModuleView:
    """Get a module view test subject with the specified state."""
    state = ModuleState(
        slot_by_module_id=slot_by_module_id or {},
        hardware_by_module_id=hardware_by_module_id or {},
        substate_by_module_id=substate_by_module_id or {},
    )

    return ModuleView(state=state)


def get_sample_parent_module_view(
    matching_module_def: ModuleDefinition,
    matching_module_id: str,
) -> ModuleView:
    """Get a ModuleView with attached modules including a requested matching module."""
    definition = load_shared_data("module/definitions/2/magneticModuleV1.json")
    magdeck_def = ModuleDefinition.parse_raw(definition)

    return make_module_view(
        slot_by_module_id={
            "id-non-matching": DeckSlotName.SLOT_1,
            matching_module_id: DeckSlotName.SLOT_2,
            "id-another-non-matching": DeckSlotName.SLOT_3,
        },
        hardware_by_module_id={
            "id-non-matching": HardwareModule(
                serial_number="serial-non-matching",
                definition=magdeck_def,
            ),
            matching_module_id: HardwareModule(
                serial_number="serial-matching",
                definition=matching_module_def,
            ),
            "id-another-non-matching": HardwareModule(
                serial_number="serial-another-non-matching",
                definition=magdeck_def,
            ),
        },
    )


def test_initial_module_data_by_id() -> None:
    """It should raise if module ID doesn't exist."""
    subject = make_module_view()

    with pytest.raises(errors.ModuleNotLoadedError):
        subject.get("helloWorld")


def test_get_missing_hardware() -> None:
    """It should raise if no loaded hardware."""
    subject = make_module_view(slot_by_module_id={"module-id": DeckSlotName.SLOT_1})

    with pytest.raises(errors.ModuleNotLoadedError):
        subject.get("module-id")


def test_get_module_data(tempdeck_v1_def: ModuleDefinition) -> None:
    """It should get module data from state by ID."""
    subject = make_module_view(
        slot_by_module_id={"module-id": DeckSlotName.SLOT_1},
        hardware_by_module_id={
            "module-id": HardwareModule(
                serial_number="serial-number",
                definition=tempdeck_v1_def,
            )
        },
    )

    assert subject.get("module-id") == LoadedModule(
        id="module-id",
        model=ModuleModel.TEMPERATURE_MODULE_V1,
        location=DeckSlotLocation(slotName=DeckSlotName.SLOT_1),
        serialNumber="serial-number",
    )


def test_get_location(tempdeck_v1_def: ModuleDefinition) -> None:
    """It should return the module's location or raise."""
    subject = make_module_view(
        slot_by_module_id={
            "module-1": DeckSlotName.SLOT_1,
            "module-2": None,
        },
        hardware_by_module_id={
            "module-1": HardwareModule(
                serial_number="serial-1",
                definition=tempdeck_v1_def,
            ),
            "module-2": HardwareModule(
                serial_number="serial-2",
                definition=tempdeck_v1_def,
            ),
        },
    )

    assert subject.get_location("module-1") == DeckSlotLocation(
        slotName=DeckSlotName.SLOT_1
    )

    with pytest.raises(errors.ModuleNotOnDeckError):
        assert subject.get_location("module-2")


def test_get_all_modules(
    tempdeck_v1_def: ModuleDefinition,
    tempdeck_v2_def: ModuleDefinition,
) -> None:
    """It should return all modules in state."""
    subject = make_module_view(
        slot_by_module_id={
            "module-1": DeckSlotName.SLOT_1,
            "module-2": DeckSlotName.SLOT_2,
        },
        hardware_by_module_id={
            "module-1": HardwareModule(
                serial_number="serial-1",
                definition=tempdeck_v1_def,
            ),
            "module-2": HardwareModule(
                serial_number="serial-2",
                definition=tempdeck_v2_def,
            ),
        },
    )

    assert subject.get_all() == [
        LoadedModule(
            id="module-1",
            serialNumber="serial-1",
            model=ModuleModel.TEMPERATURE_MODULE_V1,
            location=DeckSlotLocation(slotName=DeckSlotName.SLOT_1),
        ),
        LoadedModule(
            id="module-2",
            serialNumber="serial-2",
            model=ModuleModel.TEMPERATURE_MODULE_V2,
            location=DeckSlotLocation(slotName=DeckSlotName.SLOT_2),
        ),
    ]


def test_get_magnetic_module_substate(
    magdeck_v1_def: ModuleDefinition,
    magdeck_v2_def: ModuleDefinition,
    heater_shaker_v1_def: ModuleDefinition,
) -> None:
    """It should return a substate for the given Magnetic Module, if valid."""
    subject = make_module_view(
        slot_by_module_id={
            "magnetic-module-gen1-id": DeckSlotName.SLOT_1,
            "magnetic-module-gen2-id": DeckSlotName.SLOT_2,
            "heatshake-module-id": DeckSlotName.SLOT_3,
        },
        hardware_by_module_id={
            "magnetic-module-gen1-id": HardwareModule(
                serial_number="magnetic-module-gen1-serial",
                definition=magdeck_v1_def,
            ),
            "magnetic-module-gen2-id": HardwareModule(
                serial_number="magnetic-module-gen2-serial",
                definition=magdeck_v2_def,
            ),
            "heatshake-module-id": HardwareModule(
                serial_number="heatshake-module-serial",
                definition=heater_shaker_v1_def,
            ),
        },
        substate_by_module_id={
            "magnetic-module-gen1-id": MagneticModuleSubState(
                module_id=MagneticModuleId("magnetic-module-gen1-id"),
                model=ModuleModel.MAGNETIC_MODULE_V1,
            ),
            "magnetic-module-gen2-id": MagneticModuleSubState(
                module_id=MagneticModuleId("magnetic-module-gen2-id"),
                model=ModuleModel.MAGNETIC_MODULE_V2,
            ),
            "heatshake-module-id": HeaterShakerModuleSubState(
                module_id=HeaterShakerModuleId("heatshake-module-id"),
                is_labware_latch_closed=False,
                is_plate_shaking=False,
                plate_target_temperature=None,
            ),
        },
    )

    module_1_substate = subject.get_magnetic_module_substate(
        module_id="magnetic-module-gen1-id"
    )
    assert module_1_substate.module_id == "magnetic-module-gen1-id"
    assert module_1_substate.model == ModuleModel.MAGNETIC_MODULE_V1

    module_2_substate = subject.get_magnetic_module_substate(
        module_id="magnetic-module-gen2-id"
    )
    assert module_2_substate.module_id == "magnetic-module-gen2-id"
    assert module_2_substate.model == ModuleModel.MAGNETIC_MODULE_V2

    with pytest.raises(errors.WrongModuleTypeError):
        subject.get_magnetic_module_substate(module_id="heatshake-module-id")

    with pytest.raises(errors.ModuleNotLoadedError):
        subject.get_magnetic_module_substate(module_id="nonexistent-module-id")


def test_get_heater_shaker_module_substate(
    magdeck_v2_def: ModuleDefinition,
    heater_shaker_v1_def: ModuleDefinition,
) -> None:
    """It should return a heater-shaker module substate."""
    subject = make_module_view(
        slot_by_module_id={
            "magnetic-module-gen2-id": DeckSlotName.SLOT_2,
            "heatshake-module-id": DeckSlotName.SLOT_3,
        },
        hardware_by_module_id={
            "magnetic-module-gen2-id": HardwareModule(
                serial_number="magnetic-module-gen2-serial",
                definition=magdeck_v2_def,
            ),
            "heatshake-module-id": HardwareModule(
                serial_number="heatshake-module-serial",
                definition=heater_shaker_v1_def,
            ),
        },
        substate_by_module_id={
            "magnetic-module-gen2-id": MagneticModuleSubState(
                module_id=MagneticModuleId("magnetic-module-gen2-id"),
                model=ModuleModel.MAGNETIC_MODULE_V2,
            ),
            "heatshake-module-id": HeaterShakerModuleSubState(
                module_id=HeaterShakerModuleId("heatshake-module-id"),
                plate_target_temperature=432,
                is_labware_latch_closed=True,
                is_plate_shaking=True,
            ),
        },
    )

    hs_substate = subject.get_heater_shaker_module_substate(
        module_id="heatshake-module-id"
    )
    assert hs_substate.module_id == "heatshake-module-id"
    assert hs_substate.plate_target_temperature == 432
    assert hs_substate.is_plate_shaking is True
    assert hs_substate.is_labware_latch_closed is True

    with pytest.raises(errors.WrongModuleTypeError):
        subject.get_heater_shaker_module_substate(module_id="magnetic-module-gen2-id")

    with pytest.raises(errors.ModuleNotLoadedError):
        subject.get_heater_shaker_module_substate(module_id="nonexistent-module-id")


def test_get_temperature_module_substate(
    tempdeck_v1_def: ModuleDefinition,
    tempdeck_v2_def: ModuleDefinition,
    heater_shaker_v1_def: ModuleDefinition,
) -> None:
    """It should return a substate for the given Temperature Module, if valid."""
    subject = make_module_view(
        slot_by_module_id={
            "temp-module-gen1-id": DeckSlotName.SLOT_1,
            "temp-module-gen2-id": DeckSlotName.SLOT_2,
            "heatshake-module-id": DeckSlotName.SLOT_3,
        },
        hardware_by_module_id={
            "temp-module-gen1-id": HardwareModule(
                serial_number="temp-module-gen1-serial",
                definition=tempdeck_v1_def,
            ),
            "temp-module-gen2-id": HardwareModule(
                serial_number="temp-module-gen2-serial",
                definition=tempdeck_v2_def,
            ),
            "heatshake-module-id": HardwareModule(
                serial_number="heatshake-module-serial",
                definition=heater_shaker_v1_def,
            ),
        },
        substate_by_module_id={
            "temp-module-gen1-id": TemperatureModuleSubState(
                module_id=TemperatureModuleId("temp-module-gen1-id"),
                plate_target_temperature=None,
            ),
            "temp-module-gen2-id": TemperatureModuleSubState(
                module_id=TemperatureModuleId("temp-module-gen2-id"),
                plate_target_temperature=123,
            ),
            "heatshake-module-id": HeaterShakerModuleSubState(
                module_id=HeaterShakerModuleId("heatshake-module-id"),
                is_labware_latch_closed=False,
                is_plate_shaking=False,
                plate_target_temperature=None,
            ),
        },
    )

    module_1_substate = subject.get_temperature_module_substate(
        module_id="temp-module-gen1-id"
    )
    assert module_1_substate.module_id == "temp-module-gen1-id"
    assert module_1_substate.plate_target_temperature is None

    module_2_substate = subject.get_temperature_module_substate(
        module_id="temp-module-gen2-id"
    )
    assert module_2_substate.module_id == "temp-module-gen2-id"
    assert module_2_substate.plate_target_temperature == 123

    with pytest.raises(errors.WrongModuleTypeError):
        subject.get_temperature_module_substate(module_id="heatshake-module-id")

    with pytest.raises(errors.ModuleNotLoadedError):
        subject.get_temperature_module_substate(module_id="nonexistent-module-id")


def test_get_properties_by_id(
    tempdeck_v1_def: ModuleDefinition,
    tempdeck_v2_def: ModuleDefinition,
) -> None:
    """It should return a loaded module's properties by ID."""
    subject = make_module_view(
        slot_by_module_id={
            "module-1": DeckSlotName.SLOT_1,
            "module-2": DeckSlotName.SLOT_2,
        },
        hardware_by_module_id={
            "module-1": HardwareModule(
                serial_number="serial-1",
                definition=tempdeck_v1_def,
            ),
            "module-2": HardwareModule(
                serial_number="serial-2",
                definition=tempdeck_v2_def,
            ),
        },
    )

    assert subject.get_definition("module-1") == tempdeck_v1_def
    assert subject.get_dimensions("module-1") == tempdeck_v1_def.dimensions
    assert subject.get_model("module-1") == ModuleModel.TEMPERATURE_MODULE_V1
    assert subject.get_serial_number("module-1") == "serial-1"
    assert subject.get_location("module-1") == DeckSlotLocation(
        slotName=DeckSlotName.SLOT_1
    )

    assert subject.get_definition("module-2") == tempdeck_v2_def
    assert subject.get_dimensions("module-2") == tempdeck_v2_def.dimensions
    assert subject.get_model("module-2") == ModuleModel.TEMPERATURE_MODULE_V2
    assert subject.get_serial_number("module-2") == "serial-2"
    assert subject.get_location("module-2") == DeckSlotLocation(
        slotName=DeckSlotName.SLOT_2
    )

    with pytest.raises(errors.ModuleNotLoadedError):
        subject.get_definition("Not a module ID oh no")


def test_get_plate_target_temperature(heater_shaker_v1_def: ModuleDefinition) -> None:
    """It should return whether target temperature is set."""
    module_view = make_module_view(
        slot_by_module_id={"module-id": DeckSlotName.SLOT_1},
        hardware_by_module_id={
            "module-id": HardwareModule(
                serial_number="serial-number",
                definition=heater_shaker_v1_def,
            )
        },
        substate_by_module_id={
            "module-id": HeaterShakerModuleSubState(
                module_id=HeaterShakerModuleId("module-id"),
                is_labware_latch_closed=False,
                is_plate_shaking=False,
                plate_target_temperature=12.3,
            )
        },
    )
    subject = module_view.get_heater_shaker_module_substate("module-id")
    assert subject.get_plate_target_temperature() == 12.3


def test_get_plate_target_temperature_no_target(
    heater_shaker_v1_def: ModuleDefinition,
) -> None:
    """It should raise if no target temperature is set."""
    module_view = make_module_view(
        slot_by_module_id={"module-id": DeckSlotName.SLOT_1},
        hardware_by_module_id={
            "module-id": HardwareModule(
                serial_number="serial-number",
                definition=heater_shaker_v1_def,
            )
        },
        substate_by_module_id={
            "module-id": HeaterShakerModuleSubState(
                module_id=HeaterShakerModuleId("module-id"),
                is_labware_latch_closed=False,
                is_plate_shaking=False,
                plate_target_temperature=None,
            )
        },
    )
    subject = module_view.get_heater_shaker_module_substate("module-id")

    with pytest.raises(errors.NoTargetTemperatureSetError):
        subject.get_plate_target_temperature()


def test_get_magnet_home_to_base_offset() -> None:
    """It should return the model-specific offset to bottom."""
    subject = make_module_view()
    assert (
        subject.get_magnet_home_to_base_offset(
            module_model=ModuleModel.MAGNETIC_MODULE_V1
        )
        == 2.5
    )
    assert (
        subject.get_magnet_home_to_base_offset(
            module_model=ModuleModel.MAGNETIC_MODULE_V2
        )
        == 2.5
    )


@pytest.mark.parametrize(
    "module_model", [ModuleModel.MAGNETIC_MODULE_V1, ModuleModel.MAGNETIC_MODULE_V2]
)
def test_calculate_magnet_height(module_model: ModuleModel) -> None:
    """It should use true millimeters as hardware units."""
    subject = make_module_view()

    assert (
        subject.calculate_magnet_height(
            module_model=module_model,
            height_from_base=100,
        )
        == 100
    )

    # todo(mm, 2022-02-28):
    # It's unclear whether this expected result should actually be the same
    # between GEN1 and GEN2.
    # The GEN1 homing backoff distance looks accidentally halved, for the same reason
    # that its heights are halved. If the limit switch hardware is the same for both
    # modules, we'd expect the backoff difference to cause a difference in the
    # height_from_home test, even though we're measuring everything in true mm.
    # https://github.com/Opentrons/opentrons/issues/9585
    assert (
        subject.calculate_magnet_height(
            module_model=module_model,
            height_from_home=100,
        )
        == 97.5
    )

    assert (
        subject.calculate_magnet_height(
            module_model=module_model,
            labware_default_height=100,
            offset_from_labware_default=10.0,
        )
        == 110
    )


@pytest.mark.parametrize(
    argnames=["from_slot", "to_slot", "should_dodge"],
    argvalues=[
        (DeckSlotName.SLOT_1, DeckSlotName.FIXED_TRASH, True),
        (DeckSlotName.FIXED_TRASH, DeckSlotName.SLOT_1, True),
        (DeckSlotName.SLOT_4, DeckSlotName.FIXED_TRASH, True),
        (DeckSlotName.FIXED_TRASH, DeckSlotName.SLOT_4, True),
        (DeckSlotName.SLOT_4, DeckSlotName.SLOT_9, True),
        (DeckSlotName.SLOT_9, DeckSlotName.SLOT_4, True),
        (DeckSlotName.SLOT_4, DeckSlotName.SLOT_8, True),
        (DeckSlotName.SLOT_8, DeckSlotName.SLOT_4, True),
        (DeckSlotName.SLOT_1, DeckSlotName.SLOT_8, True),
        (DeckSlotName.SLOT_8, DeckSlotName.SLOT_1, True),
        (DeckSlotName.SLOT_4, DeckSlotName.SLOT_11, True),
        (DeckSlotName.SLOT_11, DeckSlotName.SLOT_4, True),
        (DeckSlotName.SLOT_1, DeckSlotName.SLOT_11, True),
        (DeckSlotName.SLOT_11, DeckSlotName.SLOT_1, True),
        (DeckSlotName.SLOT_2, DeckSlotName.SLOT_4, False),
    ],
)
def test_thermocycler_dodging(
    thermocycler_v1_def: ModuleDefinition,
    from_slot: DeckSlotName,
    to_slot: DeckSlotName,
    should_dodge: bool,
) -> None:
    """It should specify if thermocycler dodging is needed.

    It should return True if thermocycler exists and movement is between bad pairs of
    slot locations.
    """
    subject = make_module_view(
        slot_by_module_id={"module-id": DeckSlotName.SLOT_1},
        hardware_by_module_id={
            "module-id": HardwareModule(
                serial_number="serial-number",
                definition=thermocycler_v1_def,
            )
        },
    )

    assert (
        subject.should_dodge_thermocycler(from_slot=from_slot, to_slot=to_slot)
        is should_dodge
    )


def test_select_hardware_module_to_load_rejects_missing() -> None:
    """It should raise if the correct module isn't attached."""
    subject = make_module_view()

    with pytest.raises(errors.ModuleNotAttachedError):
        subject.select_hardware_module_to_load(
            model=ModuleModel.TEMPERATURE_MODULE_V1,
            location=DeckSlotLocation(slotName=DeckSlotName.SLOT_1),
            attached_modules=[],
        )


@pytest.mark.parametrize(
    argnames=["requested_model", "attached_definition"],
    argvalues=[
        (ModuleModel.TEMPERATURE_MODULE_V1, lazy_fixture("tempdeck_v1_def")),
        (ModuleModel.TEMPERATURE_MODULE_V2, lazy_fixture("tempdeck_v2_def")),
        (ModuleModel.TEMPERATURE_MODULE_V1, lazy_fixture("tempdeck_v2_def")),
        (ModuleModel.TEMPERATURE_MODULE_V2, lazy_fixture("tempdeck_v1_def")),
        (ModuleModel.MAGNETIC_MODULE_V1, lazy_fixture("magdeck_v1_def")),
        (ModuleModel.MAGNETIC_MODULE_V2, lazy_fixture("magdeck_v2_def")),
        (ModuleModel.THERMOCYCLER_MODULE_V1, lazy_fixture("thermocycler_v1_def")),
        (ModuleModel.THERMOCYCLER_MODULE_V2, lazy_fixture("thermocycler_v2_def")),
    ],
)
def test_select_hardware_module_to_load(
    requested_model: ModuleModel,
    attached_definition: ModuleDefinition,
) -> None:
    """It should return the first attached module that matches."""
    subject = make_module_view()

    attached_modules = [
        HardwareModule(serial_number="serial-1", definition=attached_definition),
        HardwareModule(serial_number="serial-2", definition=attached_definition),
    ]

    result = subject.select_hardware_module_to_load(
        model=requested_model,
        location=DeckSlotLocation(slotName=DeckSlotName.SLOT_1),
        attached_modules=attached_modules,
    )

    assert result == attached_modules[0]


def test_select_hardware_module_to_load_skips_non_matching(
    magdeck_v1_def: ModuleDefinition,
    magdeck_v2_def: ModuleDefinition,
) -> None:
    """It should skip over non-matching modules."""
    subject = make_module_view()

    attached_modules = [
        HardwareModule(serial_number="serial-1", definition=magdeck_v1_def),
        HardwareModule(serial_number="serial-2", definition=magdeck_v2_def),
    ]

    result = subject.select_hardware_module_to_load(
        model=ModuleModel.MAGNETIC_MODULE_V2,
        location=DeckSlotLocation(slotName=DeckSlotName.SLOT_1),
        attached_modules=attached_modules,
    )

    assert result == attached_modules[1]


def test_select_hardware_module_to_load_skips_already_loaded(
    magdeck_v1_def: ModuleDefinition,
) -> None:
    """It should skip over already assigned modules."""
    subject = make_module_view(
        hardware_by_module_id={
            "module-1": HardwareModule(
                serial_number="serial-1",
                definition=magdeck_v1_def,
            )
        }
    )

    attached_modules = [
        HardwareModule(serial_number="serial-1", definition=magdeck_v1_def),
        HardwareModule(serial_number="serial-2", definition=magdeck_v1_def),
    ]

    result = subject.select_hardware_module_to_load(
        model=ModuleModel.MAGNETIC_MODULE_V1,
        location=DeckSlotLocation(slotName=DeckSlotName.SLOT_3),
        attached_modules=attached_modules,
    )

    assert result == attached_modules[1]


def test_select_hardware_module_to_load_reuses_already_loaded(
    magdeck_v1_def: ModuleDefinition,
) -> None:
    """It should reuse over already assigned modules in the same location."""
    subject = make_module_view(
        slot_by_module_id={
            "module-1": DeckSlotName.SLOT_1,
        },
        hardware_by_module_id={
            "module-1": HardwareModule(
                serial_number="serial-1",
                definition=magdeck_v1_def,
            )
        },
    )

    attached_modules = [
        HardwareModule(serial_number="serial-1", definition=magdeck_v1_def),
        HardwareModule(serial_number="serial-2", definition=magdeck_v1_def),
    ]

    result = subject.select_hardware_module_to_load(
        model=ModuleModel.MAGNETIC_MODULE_V1,
        location=DeckSlotLocation(slotName=DeckSlotName.SLOT_1),
        attached_modules=attached_modules,
    )

    assert result == attached_modules[0]


def test_select_hardware_module_to_load_rejects_location_reassignment(
    magdeck_v1_def: ModuleDefinition,
    tempdeck_v1_def: ModuleDefinition,
) -> None:
    """It should raise if a non-matching module is already present in the slot."""
    subject = make_module_view(
        slot_by_module_id={
            "module-1": DeckSlotName.SLOT_1,
        },
        hardware_by_module_id={
            "module-1": HardwareModule(
                serial_number="serial-1",
                definition=magdeck_v1_def,
            )
        },
    )

    attached_modules = [
        HardwareModule(serial_number="serial-1", definition=magdeck_v1_def),
        HardwareModule(serial_number="serial-2", definition=tempdeck_v1_def),
    ]

    with pytest.raises(errors.ModuleAlreadyPresentError):
        subject.select_hardware_module_to_load(
            model=ModuleModel.TEMPERATURE_MODULE_V1,
            location=DeckSlotLocation(slotName=DeckSlotName.SLOT_1),
            attached_modules=attached_modules,
        )


class _CalculateMagnetHardwareHeightTestParams(NamedTuple):
    definition: ModuleDefinition
    mm_from_base: float
    expected_result: Optional[float]
    expected_exception_type: Union[Type[Exception], None]


@pytest.mark.parametrize(
    "definition, mm_from_base, expected_result, expected_exception_type",
    [
        # Happy cases:
        _CalculateMagnetHardwareHeightTestParams(
            definition=lazy_fixture("magdeck_v1_def"),
            mm_from_base=10,
            # TODO(mm, 2022-03-09): It's unclear if this expected result is correct.
            # https://github.com/Opentrons/opentrons/issues/9585
            expected_result=25,
            expected_exception_type=None,
        ),
        _CalculateMagnetHardwareHeightTestParams(
            definition=lazy_fixture("magdeck_v2_def"),
            mm_from_base=10,
            expected_result=12.5,
            expected_exception_type=None,
        ),
        # Boundary conditions:
        #
        # TODO(mm, 2022-03-09):
        # In Python >=3.9, improve precision with math.nextafter().
        # Also consider relying on shared constants instead of hard-coding bounds.
        #
        # TODO(mm, 2022-03-09): It's unclear if the bounds used for V1 modules
        # are physically correct. https://github.com/Opentrons/opentrons/issues/9585
        _CalculateMagnetHardwareHeightTestParams(  # V1 barely too low.
            definition=lazy_fixture("magdeck_v1_def"),
            mm_from_base=-2.51,
            expected_result=None,
            expected_exception_type=errors.EngageHeightOutOfRangeError,
        ),
        _CalculateMagnetHardwareHeightTestParams(  # V1 lowest allowed.
            definition=lazy_fixture("magdeck_v1_def"),
            mm_from_base=-2.5,
            expected_result=0,
            expected_exception_type=None,
        ),
        _CalculateMagnetHardwareHeightTestParams(  # V1 highest allowed.
            definition=lazy_fixture("magdeck_v1_def"),
            mm_from_base=20,
            expected_result=45,
            expected_exception_type=None,
        ),
        _CalculateMagnetHardwareHeightTestParams(  # V1 barely too high.
            definition=lazy_fixture("magdeck_v1_def"),
            mm_from_base=20.01,
            expected_result=None,
            expected_exception_type=errors.EngageHeightOutOfRangeError,
        ),
        _CalculateMagnetHardwareHeightTestParams(  # V2 barely too low.
            definition=lazy_fixture("magdeck_v2_def"),
            mm_from_base=-2.51,
            expected_result=None,
            expected_exception_type=errors.EngageHeightOutOfRangeError,
        ),
        _CalculateMagnetHardwareHeightTestParams(  # V2 lowest allowed.
            definition=lazy_fixture("magdeck_v2_def"),
            mm_from_base=-2.5,
            expected_result=0,
            expected_exception_type=None,
        ),
        _CalculateMagnetHardwareHeightTestParams(  # V2 highest allowed.
            definition=lazy_fixture("magdeck_v2_def"),
            mm_from_base=22.5,
            expected_result=25,
            expected_exception_type=None,
        ),
        _CalculateMagnetHardwareHeightTestParams(  # V2 barely too high.
            definition=lazy_fixture("magdeck_v2_def"),
            mm_from_base=22.51,
            expected_result=None,
            expected_exception_type=errors.EngageHeightOutOfRangeError,
        ),
    ],
)
def test_magnetic_module_view_calculate_magnet_hardware_height(
    definition: ModuleDefinition,
    mm_from_base: float,
    expected_result: float,
    expected_exception_type: Union[Type[Exception], None],
) -> None:
    """It should return the expected height or raise the expected exception."""
    module_view = make_module_view(
        slot_by_module_id={"module-id": DeckSlotName.SLOT_1},
        hardware_by_module_id={
            "module-id": HardwareModule(
                serial_number="serial-number",
                definition=definition,
            )
        },
        substate_by_module_id={
            "module-id": MagneticModuleSubState(
                module_id=MagneticModuleId("module-id"),
                model=definition.model,  # type: ignore [arg-type]
            )
        },
    )
    subject = module_view.get_magnetic_module_substate("module-id")
    expected_raise: ContextManager[None] = (
        # Not sure why mypy has trouble with this.
        does_not_raise()  # type: ignore[assignment]
        if expected_exception_type is None
        else pytest.raises(expected_exception_type)
    )
    with expected_raise:
        result = subject.calculate_magnet_hardware_height(mm_from_base=mm_from_base)
        assert result == expected_result


@pytest.mark.parametrize("target_temp", [36.8, 95.1])
def test_validate_heater_shaker_target_temperature_raises(
    heater_shaker_v1_def: ModuleDefinition,
    target_temp: float,
) -> None:
    """It should verify if a target temperature is valid for the specified module."""
    module_view = make_module_view(
        slot_by_module_id={"module-id": DeckSlotName.SLOT_1},
        hardware_by_module_id={
            "module-id": HardwareModule(
                serial_number="serial-number",
                definition=heater_shaker_v1_def,
            )
        },
        substate_by_module_id={
            "module-id": HeaterShakerModuleSubState(
                module_id=HeaterShakerModuleId("module-id"),
                is_labware_latch_closed=False,
                is_plate_shaking=False,
                plate_target_temperature=None,
            )
        },
    )
    subject = module_view.get_heater_shaker_module_substate("module-id")
    with pytest.raises(errors.InvalidTargetTemperatureError):
        subject.validate_target_temperature(target_temp)


@pytest.mark.parametrize("target_temp", [37, 94.8])
def test_validate_heater_shaker_target_temperature(
    heater_shaker_v1_def: ModuleDefinition,
    target_temp: float,
) -> None:
    """It should verify if a target temperature is valid for the specified module."""
    module_view = make_module_view(
        slot_by_module_id={"module-id": DeckSlotName.SLOT_1},
        hardware_by_module_id={
            "module-id": HardwareModule(
                serial_number="serial-number",
                definition=heater_shaker_v1_def,
            )
        },
        substate_by_module_id={
            "module-id": HeaterShakerModuleSubState(
                module_id=HeaterShakerModuleId("module-id"),
                is_labware_latch_closed=False,
                is_plate_shaking=False,
                plate_target_temperature=None,
            )
        },
    )
    subject = module_view.get_heater_shaker_module_substate("module-id")
    assert subject.validate_target_temperature(target_temp) == target_temp


@pytest.mark.parametrize("target_temp", [-10, 99.9])
def test_validate_temp_module_target_temperature_raises(
    tempdeck_v1_def: ModuleDefinition,
    target_temp: float,
) -> None:
    """It should verify if a target temperature is valid for the specified module."""
    module_view = make_module_view(
        slot_by_module_id={"module-id": DeckSlotName.SLOT_1},
        hardware_by_module_id={
            "module-id": HardwareModule(
                serial_number="serial-number",
                definition=tempdeck_v1_def,
            )
        },
        substate_by_module_id={
            "module-id": TemperatureModuleSubState(
                module_id=TemperatureModuleId("module-id"),
                plate_target_temperature=None,
            )
        },
    )
    subject = module_view.get_temperature_module_substate("module-id")
    with pytest.raises(errors.InvalidTargetTemperatureError):
        subject.validate_target_temperature(target_temp)


@pytest.mark.parametrize(
    ["target_temp", "validated_temp"], [(-9.431, -9), (0, 0), (99.1, 99)]
)
def test_validate_temp_module_target_temperature(
    tempdeck_v2_def: ModuleDefinition, target_temp: float, validated_temp: int
) -> None:
    """It should verify if a target temperature is valid for the specified module."""
    module_view = make_module_view(
        slot_by_module_id={"module-id": DeckSlotName.SLOT_1},
        hardware_by_module_id={
            "module-id": HardwareModule(
                serial_number="serial-number",
                definition=tempdeck_v2_def,
            )
        },
        substate_by_module_id={
            "module-id": TemperatureModuleSubState(
                module_id=TemperatureModuleId("module-id"),
                plate_target_temperature=None,
            )
        },
    )
    subject = module_view.get_temperature_module_substate("module-id")
    assert subject.validate_target_temperature(target_temp) == validated_temp


@pytest.mark.parametrize(
    argnames=["rpm_param", "validated_param"],
    argvalues=[(200.1, 200), (250.6, 251), (300.9, 301)],
)
def test_validate_heater_shaker_target_speed_converts_to_int(
    rpm_param: float, validated_param: bool, heater_shaker_v1_def: ModuleDefinition
) -> None:
    """It should validate heater-shaker target rpm."""
    module_view = make_module_view(
        slot_by_module_id={"module-id": DeckSlotName.SLOT_1},
        hardware_by_module_id={
            "module-id": HardwareModule(
                serial_number="serial-number",
                definition=heater_shaker_v1_def,
            )
        },
        substate_by_module_id={
            "module-id": HeaterShakerModuleSubState(
                module_id=HeaterShakerModuleId("module-id"),
                is_labware_latch_closed=False,
                is_plate_shaking=False,
                plate_target_temperature=None,
            )
        },
    )
    subject = module_view.get_heater_shaker_module_substate("module-id")
    assert subject.validate_target_speed(rpm_param) == validated_param


@pytest.mark.parametrize(
    argnames=["rpm_param", "expected_valid"],
    argvalues=[(199.4, False), (199.5, True), (3000.7, False), (3000.4, True)],
)
def test_validate_heater_shaker_target_speed_raises_error(
    rpm_param: float, expected_valid: bool, heater_shaker_v1_def: ModuleDefinition
) -> None:
    """It should validate heater-shaker target rpm."""
    module_view = make_module_view(
        slot_by_module_id={"module-id": DeckSlotName.SLOT_1},
        hardware_by_module_id={
            "module-id": HardwareModule(
                serial_number="serial-number",
                definition=heater_shaker_v1_def,
            )
        },
        substate_by_module_id={
            "module-id": HeaterShakerModuleSubState(
                module_id=HeaterShakerModuleId("module-id"),
                is_labware_latch_closed=False,
                is_plate_shaking=False,
                plate_target_temperature=None,
            )
        },
    )
    subject = module_view.get_heater_shaker_module_substate("module-id")
    if not expected_valid:
        with pytest.raises(errors.InvalidTargetSpeedError):
            subject.validate_target_speed(rpm_param)


def test_raise_if_labware_latch_not_closed(
    heater_shaker_v1_def: ModuleDefinition,
) -> None:
    """It should raise an error if labware latch is not closed."""
    module_view = make_module_view(
        slot_by_module_id={"module-id": DeckSlotName.SLOT_1},
        hardware_by_module_id={
            "module-id": HardwareModule(
                serial_number="serial-number",
                definition=heater_shaker_v1_def,
            )
        },
        substate_by_module_id={
            "module-id": HeaterShakerModuleSubState(
                module_id=HeaterShakerModuleId("module-id"),
                is_labware_latch_closed=False,
                is_plate_shaking=False,
                plate_target_temperature=None,
            )
        },
    )
    subject = module_view.get_heater_shaker_module_substate("module-id")
    with pytest.raises(errors.CannotPerformModuleAction):
        subject.raise_if_labware_latch_not_closed()


def test_heater_shaker_raise_if_shaking(
    heater_shaker_v1_def: ModuleDefinition,
) -> None:
    """It should raise when heater-shaker is shaking."""
    module_view = make_module_view(
        slot_by_module_id={"module-id": DeckSlotName.SLOT_1},
        hardware_by_module_id={
            "module-id": HardwareModule(
                serial_number="serial-number",
                definition=heater_shaker_v1_def,
            )
        },
        substate_by_module_id={
            "module-id": HeaterShakerModuleSubState(
                module_id=HeaterShakerModuleId("module-id"),
                is_labware_latch_closed=False,
                is_plate_shaking=True,
                plate_target_temperature=None,
            )
        },
    )
    subject = module_view.get_heater_shaker_module_substate("module-id")
    with pytest.raises(errors.CannotPerformModuleAction):
        subject.raise_if_shaking()


def test_get_heater_shaker_movement_data(
    heater_shaker_v1_def: ModuleDefinition,
    tempdeck_v2_def: ModuleDefinition,
) -> None:
    """It should get heater-shaker movement data."""
    module_view = make_module_view(
        slot_by_module_id={
            "module-id": DeckSlotName.SLOT_1,
            "other-module-id": DeckSlotName.SLOT_5,
        },
        hardware_by_module_id={
            "module-id": HardwareModule(
                serial_number="serial-number",
                definition=heater_shaker_v1_def,
            ),
            "other-module-id": HardwareModule(
                serial_number="other-serial-number",
                definition=tempdeck_v2_def,
            ),
        },
        substate_by_module_id={
            "module-id": HeaterShakerModuleSubState(
                module_id=HeaterShakerModuleId("module-id"),
                is_labware_latch_closed=True,
                is_plate_shaking=False,
                plate_target_temperature=None,
            ),
            "other-module-id": TemperatureModuleSubState(
                module_id=TemperatureModuleId("other-module-id"),
                plate_target_temperature=None,
            ),
        },
    )
    subject = module_view.get_heater_shaker_movement_restrictors()
    assert len(subject) == 1
    for hs_movement_data in subject:
        assert not hs_movement_data.plate_shaking
        assert hs_movement_data.latch_closed
        assert hs_movement_data.deck_slot == 1


def test_tempdeck_get_plate_target_temperature(
    tempdeck_v2_def: ModuleDefinition,
) -> None:
    """It should return whether target temperature is set."""
    module_view = make_module_view(
        slot_by_module_id={"module-id": DeckSlotName.SLOT_1},
        hardware_by_module_id={
            "module-id": HardwareModule(
                serial_number="serial-number",
                definition=tempdeck_v2_def,
            )
        },
        substate_by_module_id={
            "module-id": TemperatureModuleSubState(
                module_id=TemperatureModuleId("module-id"),
                plate_target_temperature=12,
            )
        },
    )
    subject = module_view.get_temperature_module_substate("module-id")
    assert subject.get_plate_target_temperature() == 12


def test_tempdeck_get_plate_target_temperature_no_target(
    tempdeck_v2_def: ModuleDefinition,
) -> None:
    """It should raise if no target temperature is set."""
    module_view = make_module_view(
        slot_by_module_id={"module-id": DeckSlotName.SLOT_1},
        hardware_by_module_id={
            "module-id": HardwareModule(
                serial_number="serial-number",
                definition=tempdeck_v2_def,
            )
        },
        substate_by_module_id={
            "module-id": TemperatureModuleSubState(
                module_id=TemperatureModuleId("module-id"),
                plate_target_temperature=None,
            )
        },
    )
    subject = module_view.get_temperature_module_substate("module-id")

    with pytest.raises(errors.NoTargetTemperatureSetError):
        subject.get_plate_target_temperature()


def test_thermocycler_get_target_temperatures(
    thermocycler_v1_def: ModuleDefinition,
) -> None:
    """It should return whether target temperature for thermocycler is set."""
    module_view = make_module_view(
        slot_by_module_id={"module-id": DeckSlotName.SLOT_1},
        hardware_by_module_id={
            "module-id": HardwareModule(
                serial_number="serial-number",
                definition=thermocycler_v1_def,
            )
        },
        substate_by_module_id={
            "module-id": ThermocyclerModuleSubState(
                module_id=ThermocyclerModuleId("module-id"),
                target_block_temperature=14,
                target_lid_temperature=28,
            )
        },
    )
    subject = module_view.get_thermocycler_module_substate("module-id")
    assert subject.get_target_block_temperature() == 14
    assert subject.get_target_lid_temperature() == 28


def test_thermocycler_get_target_temperatures_no_target(
    thermocycler_v1_def: ModuleDefinition,
) -> None:
    """It should raise if no target temperature is set."""
    module_view = make_module_view(
        slot_by_module_id={"module-id": DeckSlotName.SLOT_1},
        hardware_by_module_id={
            "module-id": HardwareModule(
                serial_number="serial-number",
                definition=thermocycler_v1_def,
            )
        },
        substate_by_module_id={
            "module-id": ThermocyclerModuleSubState(
                module_id=ThermocyclerModuleId("module-id"),
                target_block_temperature=None,
                target_lid_temperature=None,
            )
        },
    )
    subject = module_view.get_thermocycler_module_substate("module-id")

    with pytest.raises(errors.NoTargetTemperatureSetError):
        subject.get_target_block_temperature()
        subject.get_target_lid_temperature()


@pytest.fixture
def module_view_with_thermocycler(thermocycler_v1_def: ModuleDefinition) -> ModuleView:
    """Get a module state view with a loaded thermocycler."""
    return make_module_view(
        slot_by_module_id={"module-id": DeckSlotName.SLOT_1},
        hardware_by_module_id={
            "module-id": HardwareModule(
                serial_number="serial-number",
                definition=thermocycler_v1_def,
            )
        },
        substate_by_module_id={
            "module-id": ThermocyclerModuleSubState(
                module_id=ThermocyclerModuleId("module-id"),
                target_block_temperature=None,
                target_lid_temperature=None,
            )
        },
    )


@pytest.mark.parametrize("input_temperature", [0, 0.0, 0.001, 98.999, 99, 99.0])
def test_thermocycler_validate_target_block_temperature(
    module_view_with_thermocycler: ModuleView,
    input_temperature: float,
) -> None:
    """It should return a valid target block temperature."""
    subject = module_view_with_thermocycler.get_thermocycler_module_substate(
        "module-id"
    )
    result = subject.validate_target_block_temperature(input_temperature)

    assert result == input_temperature


@pytest.mark.parametrize("input_temperature", [-0.001, 99.001])
def test_thermocycler_validate_target_block_temperature_raises(
    module_view_with_thermocycler: ModuleView,
    input_temperature: float,
) -> None:
    """It should raise on invalid target block temperature."""
    subject = module_view_with_thermocycler.get_thermocycler_module_substate(
        "module-id"
    )

    with pytest.raises(errors.InvalidTargetTemperatureError):
        subject.validate_target_block_temperature(input_temperature)


@pytest.mark.parametrize("input_volume", [0, 0.0, 0.001, 50.0, 99.999, 100, 100.0])
def test_thermocycler_validate_block_max_volume(
    module_view_with_thermocycler: ModuleView,
    input_volume: float,
) -> None:
    """It should return a validated max block volume value."""
    subject = module_view_with_thermocycler.get_thermocycler_module_substate(
        "module-id"
    )
    result = subject.validate_max_block_volume(input_volume)

    assert result == input_volume


@pytest.mark.parametrize("input_volume", [-10, -0.001, 100.001])
def test_thermocycler_validate_block_max_volume_raises(
    module_view_with_thermocycler: ModuleView,
    input_volume: float,
) -> None:
    """It should raise on invalid block volume temperature."""
    subject = module_view_with_thermocycler.get_thermocycler_module_substate(
        "module-id"
    )

    with pytest.raises(errors.InvalidBlockVolumeError):
        subject.validate_max_block_volume(input_volume)


@pytest.mark.parametrize("input_temperature", [37, 37.0, 37.001, 109.999, 110, 110.0])
def test_thermocycler_validate_target_lid_temperature(
    module_view_with_thermocycler: ModuleView,
    input_temperature: float,
) -> None:
    """It should return a valid target block temperature."""
    subject = module_view_with_thermocycler.get_thermocycler_module_substate(
        "module-id"
    )
    result = subject.validate_target_lid_temperature(input_temperature)

    assert result == input_temperature


@pytest.mark.parametrize("input_temperature", [36.999, 110.001])
def test_thermocycler_validate_target_lid_temperature_raises(
    module_view_with_thermocycler: ModuleView,
    input_temperature: float,
) -> None:
    """It should raise on invalid target block temperature."""
    subject = module_view_with_thermocycler.get_thermocycler_module_substate(
        "module-id"
    )

    with pytest.raises(errors.InvalidTargetTemperatureError):
        subject.validate_target_lid_temperature(input_temperature)


@pytest.mark.parametrize(
    ("module_definition", "expected_height"),
    [
        (lazy_fixture("thermocycler_v1_def"), 98.0),
        (lazy_fixture("tempdeck_v1_def"), 84.0),
        (lazy_fixture("tempdeck_v2_def"), 84.0),
        (lazy_fixture("magdeck_v1_def"), 110.152),
        (lazy_fixture("magdeck_v2_def"), 110.152),
        (lazy_fixture("heater_shaker_v1_def"), 82.0),
    ],
)
def test_get_overall_height(
    module_definition: ModuleDefinition,
    expected_height: float,
) -> None:
    """It should get a module's overall height."""
    subject = make_module_view(
        slot_by_module_id={"module-id": DeckSlotName.SLOT_7},
        hardware_by_module_id={
            "module-id": HardwareModule(
                serial_number="serial-number",
                definition=module_definition,
            )
        },
    )

    result = subject.get_overall_height("module-id")
    assert result == expected_height
