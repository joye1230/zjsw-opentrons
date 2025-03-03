"""Command models to set and wait for a shake speed for a Heater-Shaker Module."""
from __future__ import annotations
from typing import Optional, TYPE_CHECKING
from typing_extensions import Literal, Type

from pydantic import BaseModel, Field

from ..command import AbstractCommandImpl, BaseCommand, BaseCommandCreate

if TYPE_CHECKING:
    from opentrons.protocol_engine.state import StateView
    from opentrons.protocol_engine.execution import EquipmentHandler

SetAndWaitForShakeSpeedCommandType = Literal["heaterShaker/setAndWaitForShakeSpeed"]


class SetAndWaitForShakeSpeedParams(BaseModel):
    """Input parameters to set and wait for a shake speed for a Heater-Shaker Module."""

    moduleId: str = Field(..., description="Unique ID of the Heater-Shaker Module.")
    # TODO(mc, 2022-02-24): for set temperature we use `temperature` (not `celsius`)
    # but for shake we use `rpm` (not `speed`). This is inconsistent
    rpm: float = Field(..., description="Target speed in rotations per minute.")


class SetAndWaitForShakeSpeedResult(BaseModel):
    """Result data from setting and waiting for a Heater-Shaker's shake speed."""


class SetAndWaitForShakeSpeedImpl(
    AbstractCommandImpl[SetAndWaitForShakeSpeedParams, SetAndWaitForShakeSpeedResult]
):
    """Execution implementation of Heater-Shaker's set and wait shake speed command."""

    def __init__(
        self,
        state_view: StateView,
        equipment: EquipmentHandler,
        **unused_dependencies: object,
    ) -> None:
        self._state_view = state_view
        self._equipment = equipment

    async def execute(
        self,
        params: SetAndWaitForShakeSpeedParams,
    ) -> SetAndWaitForShakeSpeedResult:
        """Set and wait for a Heater-Shaker's target shake speed."""
        # Allow propagation of ModuleNotLoadedError and WrongModuleTypeError.
        hs_module_substate = self._state_view.modules.get_heater_shaker_module_substate(
            module_id=params.moduleId
        )

        hs_module_substate.raise_if_labware_latch_not_closed()

        # Verify speed from hs module view
        validated_speed = hs_module_substate.validate_target_speed(params.rpm)

        # Allow propagation of ModuleNotAttachedError.
        hs_hardware_module = self._equipment.get_module_hardware_api(
            hs_module_substate.module_id
        )

        if hs_hardware_module is not None:
            await hs_hardware_module.set_speed(rpm=validated_speed)

        return SetAndWaitForShakeSpeedResult()


class SetAndWaitForShakeSpeed(
    BaseCommand[SetAndWaitForShakeSpeedParams, SetAndWaitForShakeSpeedResult]
):
    """A command to set and wait for a Heater-Shaker's shake speed."""

    commandType: SetAndWaitForShakeSpeedCommandType = (
        "heaterShaker/setAndWaitForShakeSpeed"
    )
    params: SetAndWaitForShakeSpeedParams
    result: Optional[SetAndWaitForShakeSpeedResult]

    _ImplementationCls: Type[SetAndWaitForShakeSpeedImpl] = SetAndWaitForShakeSpeedImpl


class SetAndWaitForShakeSpeedCreate(BaseCommandCreate[SetAndWaitForShakeSpeedParams]):
    """A request to create a Heater-Shaker's set and wait for shake speed command."""

    commandType: SetAndWaitForShakeSpeedCommandType
    params: SetAndWaitForShakeSpeedParams

    _CommandCls: Type[SetAndWaitForShakeSpeed] = SetAndWaitForShakeSpeed
