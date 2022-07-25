"""Tests for eeprom."""
import asyncio

import pytest
from opentrons_hardware.firmware_bindings.constants import (
    NodeId,
    SensorId,
    SensorType,
    SensorThresholdMode,
)
from opentrons_hardware.firmware_bindings.messages.message_definitions import (
    BaselineSensorRequest,
    ReadFromSensorRequest,
    ReadFromSensorResponse,
    SensorThresholdResponse,
    SetSensorThresholdRequest,
    WriteToSensorRequest,
)
from opentrons_hardware.firmware_bindings.messages.payloads import (
    ReadFromSensorRequestPayload,
    BaselineSensorRequestPayload,
    SetSensorThresholdRequestPayload,
    WriteToSensorRequestPayload,
)
from opentrons_hardware.firmware_bindings.messages.fields import (
    SensorTypeField,
    SensorIdField,
    SensorThresholdModeField,
)
from opentrons_hardware.firmware_bindings.utils import (
    UInt8Field,
    UInt16Field,
    UInt32Field,
    Int32Field,
)

from opentrons_hardware.drivers.can_bus import CanMessenger, WaitableCallback
from opentrons_hardware.sensors.utils import SensorDataType


@pytest.mark.parametrize(
    argnames=["sensor_type", "register_address"],
    argvalues=[
        [SensorType.capacitive, 0xFF],
        [SensorType.humidity, 0xFE],
        [SensorType.temperature, 0xFE],
        [SensorType.pressure, 0xC2],
    ],
)
@pytest.mark.requires_emulator
@pytest.mark.skip("need to refactor sensor write command")
async def test_write_to_sensors(
    can_messenger: CanMessenger,
    can_messenger_queue: WaitableCallback,
    sensor_type: SensorType,
    register_address: UInt8Field,
) -> None:
    """We should be able to write configuration values to all sensors."""
    data_to_write = UInt32Field(200)
    write_message = WriteToSensorRequest(
        payload=WriteToSensorRequestPayload(
            sensor=SensorTypeField(sensor_type),
            sensor_id=SensorIdField(SensorId.S0),
            data=data_to_write,
            reg_address=register_address,
        )
    )
    await can_messenger.send(node_id=NodeId.pipette_left, message=write_message)


@pytest.mark.parametrize(
    argnames=["sensor_type", "expected_data"],
    argvalues=[
        [SensorType.capacitive, 0.46],
        [SensorType.humidity, 83.92],
        [SensorType.temperature, 22.44],
        [SensorType.pressure, 0.02],
    ],
)
@pytest.mark.requires_emulator
async def test_read_from_sensors(
    can_messenger: CanMessenger,
    can_messenger_queue: WaitableCallback,
    sensor_type: SensorType,
    expected_data: float,
) -> None:
    """We should be able to read from all the sensors."""
    read_message = ReadFromSensorRequest(
        payload=ReadFromSensorRequestPayload(
            sensor=SensorTypeField(sensor_type),
            sensor_id=SensorIdField(SensorId.S0),
            offset_reading=UInt8Field(0),
        )
    )

    await can_messenger.send(node_id=NodeId.pipette_left, message=read_message)
    response, _ = await asyncio.wait_for(can_messenger_queue.read(), 3)

    assert isinstance(response, ReadFromSensorResponse)
    assert (
        round(SensorDataType.build(response.payload.sensor_data).to_float(), 2)
        == expected_data
    )


@pytest.mark.parametrize(
    argnames=["sensor_type", "expected_value"],
    argvalues=[
        [SensorType.capacitive, 0.46],
        [SensorType.pressure, 0.02],
    ],
)
@pytest.mark.requires_emulator
async def test_baseline_poll_sensors(
    can_messenger: CanMessenger,
    can_messenger_queue: WaitableCallback,
    sensor_type: SensorType,
    expected_value: float,
) -> None:
    """We should be able to poll the pressure and capacitive sensor."""
    poll_sensor = BaselineSensorRequest(
        payload=BaselineSensorRequestPayload(
            sensor=SensorTypeField(sensor_type),
            sensor_id=SensorIdField(SensorId.S0),
            sample_rate=UInt16Field(5),
        )
    )
    await can_messenger.send(node_id=NodeId.pipette_left, message=poll_sensor)

    await can_messenger.send(
        node_id=NodeId.pipette_left,
        message=ReadFromSensorRequest(
            payload=ReadFromSensorRequestPayload(
                sensor=SensorTypeField(sensor_type),
                sensor_id=SensorIdField(SensorId.S0),
                offset_reading=UInt8Field(0),
            )
        ),
    )

    response, arbitration_id = await asyncio.wait_for(can_messenger_queue.read(), 1)

    assert isinstance(response, ReadFromSensorResponse)
    assert (
        round(SensorDataType.build(response.payload.sensor_data).to_float(), 2)
        == expected_value
    )


@pytest.mark.parametrize(
    argnames=["sensor_type"], argvalues=[[SensorType.capacitive], [SensorType.pressure]]
)
@pytest.mark.requires_emulator
async def test_set_threshold_sensors(
    can_messenger: CanMessenger,
    can_messenger_queue: WaitableCallback,
    sensor_type: SensorType,
) -> None:
    """We should be able to set thresholds for the pressure and capacitive sensor."""
    set_threshold = SetSensorThresholdRequest(
        payload=SetSensorThresholdRequestPayload(
            sensor=SensorTypeField(sensor_type),
            sensor_id=SensorIdField(SensorId.S0),
            threshold=Int32Field(0x1),
            mode=SensorThresholdModeField(SensorThresholdMode.absolute.value),
        )
    )
    await can_messenger.send(node_id=NodeId.pipette_left, message=set_threshold)

    response, arbitration_id = await asyncio.wait_for(can_messenger_queue.read(), 1)

    assert isinstance(response, SensorThresholdResponse)
    expected_data = set_threshold.payload.threshold.value

    assert response.payload.threshold.value == expected_data
