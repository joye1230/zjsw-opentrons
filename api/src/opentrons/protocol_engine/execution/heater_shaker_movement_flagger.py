"""Helpers for flagging unsafe movements around a heater-shaker Module."""

from typing import List

from opentrons.protocols.geometry.deck_conflict import (
    get_east_west_locations,
    get_north_south_locations,
)

from ..errors import PipetteMovementRestrictedByHeaterShakerError
from ..types import HeaterShakerMovementRestrictors


def raise_if_movement_restricted(
    hs_movement_restrictors: List[HeaterShakerMovementRestrictors],
    destination_slot: int,
    is_multi_channel: bool,
    destination_is_tip_rack: bool,
) -> None:
    """Flag restricted movement around/to a Heater-Shaker."""
    for hs_movement_restrictor in hs_movement_restrictors:
        dest_east_west = destination_slot in get_east_west_locations(
            hs_movement_restrictor.deck_slot
        )
        dest_north_south = destination_slot in get_north_south_locations(
            hs_movement_restrictor.deck_slot
        )
        dest_heater_shaker = destination_slot == hs_movement_restrictor.deck_slot

        # If heater-shaker is running, can't move to or around it
        if (
            any([dest_east_west, dest_north_south, dest_heater_shaker])
            and hs_movement_restrictor.plate_shaking
        ):
            raise PipetteMovementRestrictedByHeaterShakerError(
                "Cannot move pipette to Heater-Shaker or adjacent slot while module is shaking"
            )

        # If heater-shaker's latch is open, can't move to it or east and west of it
        elif (
            dest_east_west or dest_heater_shaker
        ) and not hs_movement_restrictor.latch_closed:
            raise PipetteMovementRestrictedByHeaterShakerError(
                "Cannot move pipette east or west of or to Heater-Shaker while latch is open"
            )

        elif is_multi_channel:
            # Can't go to east/west slot under any circumstances if pipette is multi-channel
            if dest_east_west:
                raise PipetteMovementRestrictedByHeaterShakerError(
                    "Cannot move multi-channel pipette east or west of Heater-Shaker"
                )
            # Can only go north/south if the labware is a tip rack
            elif dest_north_south and not destination_is_tip_rack:
                raise PipetteMovementRestrictedByHeaterShakerError(
                    "Cannot move multi-channel pipette to non-tip rack labware north or south of Heater-Shaker"
                )
