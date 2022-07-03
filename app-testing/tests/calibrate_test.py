"""Test the initial state the application with various setups."""
import os
import time
from pathlib import Path
from typing import List

import pytest
from pytest import FixtureRequest
from rich.console import Console
from selenium import webdriver
from selenium.webdriver.chrome.options import Options

from src.menus.left_menu import LeftMenu
from src.pages.deck_calibrate import DeckCalibration
from src.pages.device_landing import DeviceLanding
from src.resources.ot_application import OtApplication
from src.resources.ot_robot import OtRobot
from src.resources.robot_data import EmulatedAlpha, RobotDataType


@pytest.mark.calibrate
@pytest.mark.emulated_alpha
def test_deck_calibrate(
    chrome_options: Options,
    console: Console,
    robots: List[RobotDataType],
    request: FixtureRequest,
) -> None:
    """Deck Calibrate the dev robot."""
    # use variable to prevent the popup
    os.environ["OT_APP_ANALYTICS__SEEN_OPT_IN"] = "true"
    # app can see docker robot
    os.environ["OT_APP_DISCOVERY__CANDIDATES"] = "localhost"
    with webdriver.Chrome(options=chrome_options) as driver:  # type: ignore
        console.print(f"driver capabilities {driver.capabilities}")
        ot_application = OtApplication(
            Path(f"{driver.capabilities['chrome']['userDataDir']}/config.json")
        )
        console.print(ot_application.config)
        # ignore updates
        ot_application.config["alerts"]["ignored"] = ["appUpdateAvailable"]
        ot_application.write_config()
        left_menu: LeftMenu = LeftMenu(driver, console, request.node.nodeid)
        device_landing: DeviceLanding = DeviceLanding(
            driver, console, request.node.nodeid
        )
        left_menu.click_devices_button()
        # this test is against only the EmulatedAlpha robot
        robot = next(
            robot
            for robot in robots
            if robot.display_name == EmulatedAlpha.display_name
        )
        ot_robot = OtRobot(console, robot)
        console.print(
            f"Testing against robot {ot_robot.data.display_name}",
        )
        assert ot_robot.is_alive(), "is the robot available?"

        # calibrate

        device_landing.click_overflow_menu_button_on_device_landing(
            ot_robot.data.display_name
        )
        device_landing.click_overflow_robot_settings(ot_robot.data.display_name)

        # Now we are on Robot Settings > calibration tab
        calibrate = DeckCalibration(driver, console, request.node.nodeid)

        if not device_landing.is_deck_calibrated():
            console.print("Calibrating deck.", style="bold blue")
            # open calibration again
            device_landing.open_calibration()
            calibrate.calibrate_deck()
        else:
            console.print("Deck is calibrated.", style="bold blue")


def calibrate_pipette(device_landing: DeviceLanding) -> None:
    """Do the steps of calibration for a pipette."""
    device_landing.click_continue_with_calibration_block()
    device_landing.click_start_tip_length()
    device_landing.click_confirm_placement()
    device_landing.click_down()
    device_landing.click_down()
    device_landing.click_down()
    device_landing.click_save_nozzle_z()
    device_landing.click_back()
    device_landing.click_back()
    device_landing.click_pickup_tip()
    device_landing.click_yes_move_to_measure()
    device_landing.shift_down_arrow_key()
    device_landing.shift_down_arrow_key()
    device_landing.shift_down_arrow_key()
    device_landing.shift_down_arrow_key()
    device_landing.click_save_the_tip_length()
    device_landing.click_continue_to_pipette_offset()
    device_landing.shift_down_arrow_key()
    device_landing.shift_down_arrow_key()
    device_landing.shift_down_arrow_key()
    device_landing.shift_down_arrow_key()
    device_landing.shift_down_arrow_key()
    device_landing.shift_down_arrow_key()
    device_landing.click_save_calibration_move_to_slot_1()
    device_landing.up_arrow_key()
    device_landing.up_arrow_key()
    device_landing.click_save_calibration()
    device_landing.click_return_tip_exit()


@pytest.mark.calibrate
@pytest.mark.emulated_alpha
def test_calibrate_pipettes(
    chrome_options: Options,
    console: Console,
    robots: List[RobotDataType],
    request: FixtureRequest,
) -> None:
    """Deck Calibrate the dev robot."""
    # use variable to prevent the popup
    os.environ["OT_APP_ANALYTICS__SEEN_OPT_IN"] = "true"
    # app can see docker robot
    os.environ["OT_APP_DISCOVERY__CANDIDATES"] = "localhost"
    with webdriver.Chrome(options=chrome_options) as driver:  # type: ignore
        console.print(f"driver capabilities {driver.capabilities}")
        ot_application = OtApplication(
            Path(f"{driver.capabilities['chrome']['userDataDir']}/config.json")
        )
        console.print(ot_application.config)
        # ignore updates
        ot_application.config["alerts"]["ignored"] = ["appUpdateAvailable"]
        ot_application.write_config()
        left_menu: LeftMenu = LeftMenu(driver, console, request.node.nodeid)
        device_landing: DeviceLanding = DeviceLanding(
            driver, console, request.node.nodeid
        )

        # this test is against only the EmulatedAlpha robot
        robot = next(
            robot
            for robot in robots
            if robot.display_name == EmulatedAlpha.display_name
        )
        ot_robot: OtRobot = OtRobot(console, robot)
        console.print(
            f"Testing against robot {ot_robot.data.display_name}",
        )
        assert ot_robot.is_alive(), "is the robot available?"

        assert (
            ot_robot.deck_calibrated() is True
        ), "Stopping test, deck must be calibrated to calibrate pipettes."

        # calibrate the left pipette
        # devices > robot detail

        left_menu.click_devices_button()
        device_landing.click_robot_banner(ot_robot.data.display_name)
        # click calibrate now banner
        device_landing.click_calibrate_now(ot_robot.data.left_pipette_model)
        calibrate_pipette(device_landing)

        # done calibrating left pipette now do right
        # devices > robot detail
        time.sleep(5)
        left_menu.click_devices_button()  # when spinner up, click will error
        device_landing.click_robot_banner(ot_robot.data.display_name)

        device_landing.click_calibrate_now(ot_robot.data.right_pipette_model)
        calibrate_pipette(device_landing)

        time.sleep(5)  # when spinner up, click will error
        left_menu.click_devices_button()
        device_landing.click_overflow_menu_button_on_device_landing(
            ot_robot.data.display_name
        )
        device_landing.click_overflow_robot_settings(ot_robot.data.display_name)
        # Now we are on Robot Settings > calibration tab
        banner_gone = device_landing.invisible_pipette_offset_missing_banner_safely()
        # This is the last calibration to run so the banner should go away
        # pipettes and tip lengths for both
        assert banner_gone
        assert ot_robot.pipettes_calibrated()
        assert ot_robot.tip_length_calibrated()
