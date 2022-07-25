"""Test state getters for retrieving geometry views of state."""
import pytest
from decoy import Decoy
from typing import cast

from opentrons.calibration_storage.helpers import uri_from_details
from opentrons_shared_data.deck.dev_types import DeckDefinitionV3
from opentrons.protocols.models import LabwareDefinition
from opentrons.hardware_control.dev_types import PipetteDict
from opentrons.types import Point, DeckSlotName

from opentrons.protocol_engine import errors
from opentrons.protocol_engine.types import (
    LabwareOffsetVector,
    DeckSlotLocation,
    ModuleLocation,
    LoadedLabware,
    LoadedModule,
    WellLocation,
    WellOrigin,
    WellOffset,
)
from opentrons.protocol_engine.state.labware import LabwareView
from opentrons.protocol_engine.state.modules import ModuleView
from opentrons.protocol_engine.state.geometry import GeometryView


@pytest.fixture
def labware_view(decoy: Decoy) -> LabwareView:
    """Get a mock in the shape of a LabwareView."""
    return decoy.mock(cls=LabwareView)


@pytest.fixture
def module_view(decoy: Decoy) -> ModuleView:
    """Get a mock in the shape of a ModuleView."""
    return decoy.mock(cls=ModuleView)


@pytest.fixture
def subject(labware_view: LabwareView, module_view: ModuleView) -> GeometryView:
    """Get a GeometryView with its store dependencies mocked out."""
    return GeometryView(labware_view=labware_view, module_view=module_view)


def test_get_labware_parent_position(
    decoy: Decoy,
    standard_deck_def: DeckDefinitionV3,
    well_plate_def: LabwareDefinition,
    labware_view: LabwareView,
    subject: GeometryView,
) -> None:
    """It should return a deck slot position for labware in a deck slot."""
    labware_data = LoadedLabware(
        id="labware-id",
        loadName="b",
        definitionUri=uri_from_details(namespace="a", load_name="b", version=1),
        location=DeckSlotLocation(slotName=DeckSlotName.SLOT_3),
        offsetId=None,
    )
    decoy.when(labware_view.get("labware-id")).then_return(labware_data)
    decoy.when(labware_view.get_slot_position(DeckSlotName.SLOT_3)).then_return(
        Point(1, 2, 3)
    )

    result = subject.get_labware_parent_position("labware-id")

    assert result == Point(1, 2, 3)


def test_get_labware_parent_position_on_module(
    decoy: Decoy,
    standard_deck_def: DeckDefinitionV3,
    well_plate_def: LabwareDefinition,
    labware_view: LabwareView,
    module_view: ModuleView,
    subject: GeometryView,
) -> None:
    """It should return a module position for labware on a module."""
    labware_data = LoadedLabware(
        id="labware-id",
        loadName="b",
        definitionUri=uri_from_details(namespace="a", load_name="b", version=1),
        location=ModuleLocation(moduleId="module-id"),
        offsetId=None,
    )

    decoy.when(labware_view.get("labware-id")).then_return(labware_data)
    decoy.when(module_view.get_location("module-id")).then_return(
        DeckSlotLocation(slotName=DeckSlotName.SLOT_3)
    )
    decoy.when(labware_view.get_slot_position(DeckSlotName.SLOT_3)).then_return(
        Point(1, 2, 3)
    )
    decoy.when(module_view.get_module_offset("module-id")).then_return(
        LabwareOffsetVector(x=4, y=5, z=6)
    )

    result = subject.get_labware_parent_position("labware-id")

    assert result == Point(5, 7, 9)


def test_get_labware_origin_position(
    decoy: Decoy,
    standard_deck_def: DeckDefinitionV3,
    well_plate_def: LabwareDefinition,
    labware_view: LabwareView,
    subject: GeometryView,
) -> None:
    """It should return a deck slot position with the labware's offset as its origin."""
    labware_data = LoadedLabware(
        id="labware-id",
        loadName="load-name",
        definitionUri="defintion-uri",
        location=DeckSlotLocation(slotName=DeckSlotName.SLOT_3),
        offsetId=None,
    )

    decoy.when(labware_view.get("labware-id")).then_return(labware_data)
    decoy.when(labware_view.get_definition("labware-id")).then_return(well_plate_def)
    decoy.when(labware_view.get_slot_position(DeckSlotName.SLOT_3)).then_return(
        Point(1, 2, 3)
    )

    expected_parent = Point(1, 2, 3)
    expected_offset = Point(
        x=well_plate_def.cornerOffsetFromSlot.x,
        y=well_plate_def.cornerOffsetFromSlot.y,
        z=well_plate_def.cornerOffsetFromSlot.z,
    )
    expected_point = expected_parent + expected_offset

    result = subject.get_labware_origin_position("labware-id")

    assert result == expected_point


def test_get_labware_highest_z(
    decoy: Decoy,
    standard_deck_def: DeckDefinitionV3,
    well_plate_def: LabwareDefinition,
    labware_view: LabwareView,
    subject: GeometryView,
) -> None:
    """It should get the absolute location of a labware's highest Z point."""
    labware_data = LoadedLabware(
        id="labware-id",
        loadName="load-name",
        definitionUri="definition-uri",
        location=DeckSlotLocation(slotName=DeckSlotName.SLOT_3),
        offsetId="offset-id",
    )
    slot_pos = Point(1, 2, 3)
    calibration_offset = LabwareOffsetVector(x=1, y=-2, z=3)

    decoy.when(labware_view.get("labware-id")).then_return(labware_data)
    decoy.when(labware_view.get_definition("labware-id")).then_return(well_plate_def)
    decoy.when(labware_view.get_labware_offset_vector("labware-id")).then_return(
        calibration_offset
    )
    decoy.when(labware_view.get_slot_position(DeckSlotName.SLOT_3)).then_return(
        slot_pos
    )

    highest_z = subject.get_labware_highest_z("labware-id")

    assert highest_z == (well_plate_def.dimensions.zDimension + 3 + 3)


def test_get_module_labware_highest_z(
    decoy: Decoy,
    standard_deck_def: DeckDefinitionV3,
    well_plate_def: LabwareDefinition,
    labware_view: LabwareView,
    module_view: ModuleView,
    subject: GeometryView,
) -> None:
    """It should get the absolute location of a labware's highest Z point."""
    labware_data = LoadedLabware(
        id="labware-id",
        loadName="load-name",
        definitionUri="definition-uri",
        location=ModuleLocation(moduleId="module-id"),
        offsetId="offset-id",
    )
    slot_pos = Point(1, 2, 3)
    calibration_offset = LabwareOffsetVector(x=1, y=-2, z=3)

    decoy.when(labware_view.get("labware-id")).then_return(labware_data)
    decoy.when(labware_view.get_definition("labware-id")).then_return(well_plate_def)
    decoy.when(labware_view.get_labware_offset_vector("labware-id")).then_return(
        calibration_offset
    )
    decoy.when(labware_view.get_slot_position(DeckSlotName.SLOT_3)).then_return(
        slot_pos
    )
    decoy.when(module_view.get_location("module-id")).then_return(
        DeckSlotLocation(slotName=DeckSlotName.SLOT_3)
    )
    decoy.when(module_view.get_module_offset("module-id")).then_return(
        LabwareOffsetVector(x=4, y=5, z=6)
    )
    decoy.when(module_view.get_height_over_labware("module-id")).then_return(0.5)

    highest_z = subject.get_labware_highest_z("labware-id")

    assert highest_z == (well_plate_def.dimensions.zDimension + 3 + 3 + 6 + 0.5)


def test_get_all_labware_highest_z(
    decoy: Decoy,
    standard_deck_def: DeckDefinitionV3,
    well_plate_def: LabwareDefinition,
    reservoir_def: LabwareDefinition,
    labware_view: LabwareView,
    module_view: ModuleView,
    subject: GeometryView,
) -> None:
    """It should get the highest Z amongst all labware."""
    plate = LoadedLabware(
        id="plate-id",
        loadName="plate-load-name",
        definitionUri="plate-definition-uri",
        location=DeckSlotLocation(slotName=DeckSlotName.SLOT_3),
        offsetId="plate-offset-id",
    )
    reservoir = LoadedLabware(
        id="reservoir-id",
        loadName="reservoir-load-name",
        definitionUri="reservoir-definition-uri",
        location=DeckSlotLocation(slotName=DeckSlotName.SLOT_4),
        offsetId="reservoir-offset-id",
    )

    plate_offset = LabwareOffsetVector(x=1, y=-2, z=3)
    reservoir_offset = LabwareOffsetVector(x=1, y=-2, z=3)

    decoy.when(module_view.get_all()).then_return([])

    decoy.when(labware_view.get_all()).then_return([plate, reservoir])
    decoy.when(labware_view.get("plate-id")).then_return(plate)
    decoy.when(labware_view.get("reservoir-id")).then_return(reservoir)

    decoy.when(labware_view.get_definition("plate-id")).then_return(well_plate_def)
    decoy.when(labware_view.get_definition("reservoir-id")).then_return(reservoir_def)

    decoy.when(labware_view.get_labware_offset_vector("plate-id")).then_return(
        plate_offset
    )
    decoy.when(labware_view.get_labware_offset_vector("reservoir-id")).then_return(
        reservoir_offset
    )

    decoy.when(labware_view.get_slot_position(DeckSlotName.SLOT_3)).then_return(
        Point(1, 2, 3)
    )
    decoy.when(labware_view.get_slot_position(DeckSlotName.SLOT_4)).then_return(
        Point(4, 5, 6)
    )

    plate_z = subject.get_labware_highest_z("plate-id")
    reservoir_z = subject.get_labware_highest_z("reservoir-id")
    all_z = subject.get_all_labware_highest_z()

    assert all_z == max(plate_z, reservoir_z)


def test_get_all_labware_highest_z_with_modules(
    decoy: Decoy,
    labware_view: LabwareView,
    module_view: ModuleView,
    subject: GeometryView,
) -> None:
    """It should get the highest Z including modules."""
    module_1 = LoadedModule.construct(id="module-id-1")  # type: ignore[call-arg]
    module_2 = LoadedModule.construct(id="module-id-2")  # type: ignore[call-arg]

    decoy.when(labware_view.get_all()).then_return([])
    decoy.when(module_view.get_all()).then_return([module_1, module_2])
    decoy.when(module_view.get_overall_height("module-id-1")).then_return(42.0)
    decoy.when(module_view.get_overall_height("module-id-2")).then_return(1337.0)

    result = subject.get_all_labware_highest_z()

    assert result == 1337.0


def test_get_labware_position(
    decoy: Decoy,
    well_plate_def: LabwareDefinition,
    standard_deck_def: DeckDefinitionV3,
    labware_view: LabwareView,
    subject: GeometryView,
) -> None:
    """It should return the slot position plus calibrated offset."""
    labware_data = LoadedLabware(
        id="labware-id",
        loadName="load-name",
        definitionUri="definition-uri",
        location=DeckSlotLocation(slotName=DeckSlotName.SLOT_4),
        offsetId="reservoir-offset-id",
    )
    calibration_offset = LabwareOffsetVector(x=1, y=-2, z=3)
    slot_pos = Point(4, 5, 6)

    decoy.when(labware_view.get("labware-id")).then_return(labware_data)
    decoy.when(labware_view.get_definition("labware-id")).then_return(well_plate_def)
    decoy.when(labware_view.get_labware_offset_vector("labware-id")).then_return(
        calibration_offset
    )
    decoy.when(labware_view.get_slot_position(DeckSlotName.SLOT_4)).then_return(
        slot_pos
    )

    position = subject.get_labware_position(labware_id="labware-id")

    assert position == Point(
        x=slot_pos[0] + well_plate_def.cornerOffsetFromSlot.x + 1,
        y=slot_pos[1] + well_plate_def.cornerOffsetFromSlot.y - 2,
        z=slot_pos[2] + well_plate_def.cornerOffsetFromSlot.z + 3,
    )


def test_get_well_position(
    decoy: Decoy,
    well_plate_def: LabwareDefinition,
    standard_deck_def: DeckDefinitionV3,
    labware_view: LabwareView,
    subject: GeometryView,
) -> None:
    """It should be able to get the position of a well top in a labware."""
    labware_data = LoadedLabware(
        id="labware-id",
        loadName="load-name",
        definitionUri="definition-uri",
        location=DeckSlotLocation(slotName=DeckSlotName.SLOT_4),
        offsetId="offset-id",
    )
    calibration_offset = LabwareOffsetVector(x=1, y=-2, z=3)
    slot_pos = Point(4, 5, 6)
    well_def = well_plate_def.wells["B2"]

    decoy.when(labware_view.get("labware-id")).then_return(labware_data)
    decoy.when(labware_view.get_definition("labware-id")).then_return(well_plate_def)
    decoy.when(labware_view.get_labware_offset_vector("labware-id")).then_return(
        calibration_offset
    )
    decoy.when(labware_view.get_slot_position(DeckSlotName.SLOT_4)).then_return(
        slot_pos
    )
    decoy.when(labware_view.get_well_definition("labware-id", "B2")).then_return(
        well_def
    )

    result = subject.get_well_position("labware-id", "B2")

    assert result == Point(
        x=slot_pos[0] + 1 + well_def.x,
        y=slot_pos[1] - 2 + well_def.y,
        z=slot_pos[2] + 3 + well_def.z + well_def.depth,
    )


def test_get_well_edges(
    decoy: Decoy,
    well_plate_def: LabwareDefinition,
    standard_deck_def: DeckDefinitionV3,
    labware_view: LabwareView,
    subject: GeometryView,
) -> None:
    """It should be able to get the position of a well top in a labware."""
    labware_data = LoadedLabware(
        id="labware-id",
        loadName="load-name",
        definitionUri="definition-uri",
        location=DeckSlotLocation(slotName=DeckSlotName.SLOT_4),
        offsetId="offset-id",
    )
    calibration_offset = LabwareOffsetVector(x=1, y=-2, z=3)
    slot_pos = Point(4, 5, 6)
    well_def = well_plate_def.wells["B2"]
    well_location = WellLocation(offset=WellOffset(x=7, y=8, z=-9))

    decoy.when(labware_view.get("labware-id")).then_return(labware_data)
    decoy.when(labware_view.get_definition("labware-id")).then_return(well_plate_def)
    decoy.when(labware_view.get_labware_offset_vector("labware-id")).then_return(
        calibration_offset
    )
    decoy.when(labware_view.get_slot_position(DeckSlotName.SLOT_4)).then_return(
        slot_pos
    )
    decoy.when(labware_view.get_well_definition("labware-id", "B2")).then_return(
        well_def
    )

    result = subject.get_well_edges("labware-id", "B2", well_location)

    expected_center = Point(
        x=slot_pos[0] + 1 + well_def.x + 7,
        y=slot_pos[1] - 2 + well_def.y + 8,
        z=slot_pos[2] + 3 + well_def.z - 9 + well_def.depth,
    )
    assert well_def.diameter is not None
    offset = well_def.diameter / 2.0

    assert result == [
        expected_center + Point(x=offset, y=0, z=0),
        expected_center + Point(x=-offset, y=0, z=0),
        expected_center,
        expected_center + Point(x=0, y=offset, z=0),
        expected_center + Point(x=0, y=-offset, z=0),
    ]


def test_get_module_labware_well_position(
    decoy: Decoy,
    well_plate_def: LabwareDefinition,
    standard_deck_def: DeckDefinitionV3,
    labware_view: LabwareView,
    module_view: ModuleView,
    subject: GeometryView,
) -> None:
    """It should be able to get the position of a well top in a labware on module."""
    labware_data = LoadedLabware(
        id="labware-id",
        loadName="load-name",
        definitionUri="definition-uri",
        location=ModuleLocation(moduleId="module-id"),
        offsetId="offset-id",
    )
    calibration_offset = LabwareOffsetVector(x=1, y=-2, z=3)
    slot_pos = Point(4, 5, 6)
    well_def = well_plate_def.wells["B2"]

    decoy.when(labware_view.get("labware-id")).then_return(labware_data)
    decoy.when(labware_view.get_definition("labware-id")).then_return(well_plate_def)
    decoy.when(labware_view.get_labware_offset_vector("labware-id")).then_return(
        calibration_offset
    )
    decoy.when(labware_view.get_slot_position(DeckSlotName.SLOT_4)).then_return(
        slot_pos
    )
    decoy.when(labware_view.get_well_definition("labware-id", "B2")).then_return(
        well_def
    )
    decoy.when(module_view.get_location("module-id")).then_return(
        DeckSlotLocation(slotName=DeckSlotName.SLOT_4)
    )
    decoy.when(module_view.get_module_offset("module-id")).then_return(
        LabwareOffsetVector(x=4, y=5, z=6)
    )

    result = subject.get_well_position("labware-id", "B2")

    assert result == Point(
        x=slot_pos[0] + 1 + well_def.x + 4,
        y=slot_pos[1] - 2 + well_def.y + 5,
        z=slot_pos[2] + 3 + well_def.z + well_def.depth + 6,
    )


def test_get_well_position_with_top_offset(
    decoy: Decoy,
    well_plate_def: LabwareDefinition,
    standard_deck_def: DeckDefinitionV3,
    labware_view: LabwareView,
    subject: GeometryView,
) -> None:
    """It should be able to get the position of a well top in a labware."""
    labware_data = LoadedLabware(
        id="labware-id",
        loadName="load-name",
        definitionUri="definition-uri",
        location=DeckSlotLocation(slotName=DeckSlotName.SLOT_4),
        offsetId="offset-id",
    )
    calibration_offset = LabwareOffsetVector(x=1, y=-2, z=3)
    slot_pos = Point(4, 5, 6)
    well_def = well_plate_def.wells["B2"]

    decoy.when(labware_view.get("labware-id")).then_return(labware_data)
    decoy.when(labware_view.get_definition("labware-id")).then_return(well_plate_def)
    decoy.when(labware_view.get_labware_offset_vector("labware-id")).then_return(
        calibration_offset
    )
    decoy.when(labware_view.get_slot_position(DeckSlotName.SLOT_4)).then_return(
        slot_pos
    )
    decoy.when(labware_view.get_well_definition("labware-id", "B2")).then_return(
        well_def
    )

    result = subject.get_well_position(
        labware_id="labware-id",
        well_name="B2",
        well_location=WellLocation(
            origin=WellOrigin.TOP,
            offset=WellOffset(x=1, y=2, z=3),
        ),
    )

    assert result == Point(
        x=slot_pos[0] + 1 + well_def.x + 1,
        y=slot_pos[1] - 2 + well_def.y + 2,
        z=slot_pos[2] + 3 + well_def.z + well_def.depth + 3,
    )


def test_get_well_position_with_bottom_offset(
    decoy: Decoy,
    well_plate_def: LabwareDefinition,
    standard_deck_def: DeckDefinitionV3,
    labware_view: LabwareView,
    subject: GeometryView,
) -> None:
    """It should be able to get the position of a well bottom in a labware."""
    labware_data = LoadedLabware(
        id="labware-id",
        loadName="load-name",
        definitionUri="definition-uri",
        location=DeckSlotLocation(slotName=DeckSlotName.SLOT_4),
        offsetId="offset-id",
    )
    calibration_offset = LabwareOffsetVector(x=1, y=-2, z=3)
    slot_pos = Point(4, 5, 6)
    well_def = well_plate_def.wells["B2"]

    decoy.when(labware_view.get("labware-id")).then_return(labware_data)
    decoy.when(labware_view.get_definition("labware-id")).then_return(well_plate_def)
    decoy.when(labware_view.get_labware_offset_vector("labware-id")).then_return(
        calibration_offset
    )
    decoy.when(labware_view.get_slot_position(DeckSlotName.SLOT_4)).then_return(
        slot_pos
    )
    decoy.when(labware_view.get_well_definition("labware-id", "B2")).then_return(
        well_def
    )

    result = subject.get_well_position(
        labware_id="labware-id",
        well_name="B2",
        well_location=WellLocation(
            origin=WellOrigin.BOTTOM,
            offset=WellOffset(x=3, y=2, z=1),
        ),
    )

    assert result == Point(
        x=slot_pos[0] + 1 + well_def.x + 3,
        y=slot_pos[1] - 2 + well_def.y + 2,
        z=slot_pos[2] + 3 + well_def.z + 1,
    )


def test_get_nominal_effective_tip_length(
    decoy: Decoy,
    labware_view: LabwareView,
    subject: GeometryView,
) -> None:
    """It should get the effective tip length from a labware ID and pipette config."""
    pipette_config: PipetteDict = cast(
        PipetteDict,
        {
            "tip_overlap": {
                "default": 10,
                "opentrons/opentrons_96_tiprack_300ul/1": 20,
            }
        },
    )

    decoy.when(labware_view.get_tip_length("tip-rack-id")).then_return(50)

    decoy.when(labware_view.get_definition_uri("tip-rack-id")).then_return(
        "opentrons/opentrons_96_tiprack_300ul/1"
    )

    length_eff = subject.get_nominal_effective_tip_length(
        labware_id="tip-rack-id",
        pipette_config=pipette_config,
    )

    assert length_eff == 30

    decoy.when(labware_view.get_definition_uri("tip-rack-id")).then_return(
        "opentrons/something_else/1"
    )

    default_length_eff = subject.get_nominal_effective_tip_length(
        labware_id="tip-rack-id",
        pipette_config=pipette_config,
    )

    assert default_length_eff == 40


def test_get_nominal_tip_geometry(
    decoy: Decoy,
    tip_rack_def: LabwareDefinition,
    labware_view: LabwareView,
    subject: GeometryView,
) -> None:
    """It should get a "well's" tip geometry."""
    pipette_config: PipetteDict = cast(PipetteDict, {"tip_overlap": {"default": 10}})
    well_def = tip_rack_def.wells["B2"]

    decoy.when(labware_view.get_tip_length("tip-rack-id")).then_return(50)

    decoy.when(labware_view.get_definition_uri("tip-rack-id")).then_return("")

    decoy.when(labware_view.get_well_definition("tip-rack-id", "B2")).then_return(
        well_def
    )

    tip_geometry = subject.get_nominal_tip_geometry(
        labware_id="tip-rack-id",
        well_name="B2",
        pipette_config=pipette_config,
    )

    assert tip_geometry.effective_length == 40
    assert tip_geometry.diameter == well_def.diameter
    assert tip_geometry.volume == well_def.totalLiquidVolume


def test_get_nominal_tip_geometry_raises(
    decoy: Decoy,
    tip_rack_def: LabwareDefinition,
    labware_view: LabwareView,
    subject: GeometryView,
) -> None:
    """It should raise LabwareIsNotTipRackError if well is not circular."""
    pipette_config: PipetteDict = cast(PipetteDict, {"tip_overlap": {"default": 10}})
    well_def = tip_rack_def.wells["B2"]
    well_def.shape = "rectangular"

    with pytest.raises(errors.LabwareIsNotTipRackError):
        decoy.when(labware_view.get_tip_length("tip-rack-id")).then_return(0)

        decoy.when(labware_view.get_well_definition("tip-rack-id", "B2")).then_return(
            well_def
        )

        subject.get_nominal_tip_geometry(
            labware_id="tip-rack-id", well_name="B2", pipette_config=pipette_config
        )


def test_get_tip_drop_location(
    decoy: Decoy,
    tip_rack_def: LabwareDefinition,
    labware_view: LabwareView,
    subject: GeometryView,
) -> None:
    """It should get relative drop tip location for a pipette/labware combo."""
    pipette_config: PipetteDict = cast(PipetteDict, {"return_tip_height": 0.5})

    decoy.when(labware_view.get_tip_length("tip-rack-id")).then_return(50)

    location = subject.get_tip_drop_location(
        pipette_config=pipette_config,
        labware_id="tip-rack-id",
        well_location=WellLocation(offset=WellOffset(x=1, y=2, z=25)),
    )

    assert location == WellLocation(offset=WellOffset(x=1, y=2, z=0))


def test_get_tip_drop_location_with_trash(
    decoy: Decoy,
    labware_view: LabwareView,
    subject: GeometryView,
) -> None:
    """It should get relative drop tip location for a the fixed trash."""
    pipette_config: PipetteDict = cast(PipetteDict, {"return_tip_height": 0.5})

    decoy.when(
        labware_view.get_has_quirk(labware_id="labware-id", quirk="fixedTrash")
    ).then_return(True)

    location = subject.get_tip_drop_location(
        labware_id="labware-id",
        well_location=WellLocation(offset=WellOffset(x=1, y=2, z=3)),
        pipette_config=pipette_config,
    )

    assert location == WellLocation(offset=WellOffset(x=1, y=2, z=3))


def test_get_tip_drop_invalid_origin(
    decoy: Decoy,
    labware_view: LabwareView,
    subject: GeometryView,
) -> None:
    """It should raise if the given WellLocation is not WellOrigin.TOP."""
    pipette_config: PipetteDict = cast(PipetteDict, {"return_tip_height": 0.5})

    with pytest.raises(errors.WellOriginNotAllowedError):
        subject.get_tip_drop_location(
            labware_id="labware-id",
            well_location=WellLocation(origin=WellOrigin.BOTTOM),
            pipette_config=pipette_config,
        )


def test_get_ancestor_slot_name(
    decoy: Decoy,
    labware_view: LabwareView,
    module_view: ModuleView,
    subject: GeometryView,
) -> None:
    """It should get name of ancestor slot of labware."""
    decoy.when(labware_view.get("labware-1")).then_return(
        LoadedLabware(
            id="labware-1",
            loadName="load-name",
            definitionUri="1234",
            location=DeckSlotLocation(slotName=DeckSlotName.SLOT_4),
        )
    )
    assert subject.get_ancestor_slot_name("labware-1") == DeckSlotName.SLOT_4

    decoy.when(labware_view.get("labware-2")).then_return(
        LoadedLabware(
            id="labware-2",
            loadName="load-name",
            definitionUri="4567",
            location=ModuleLocation(moduleId="4321"),
        )
    )
    decoy.when(module_view.get_location("4321")).then_return(
        DeckSlotLocation(slotName=DeckSlotName.SLOT_1)
    )
    assert subject.get_ancestor_slot_name("labware-2") == DeckSlotName.SLOT_1
