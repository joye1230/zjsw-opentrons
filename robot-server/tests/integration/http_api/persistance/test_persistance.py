
import time
from pathlib import Path

from tests.integration.dev_server import DevServer


from tests.integration.http_robot import HttpRobot

from tests.integration.utils import create_minimal_protocol



def test_dev_server(server_temp_directory: str) -> None:
    server = DevServer(server_temp_directory)
    robot = HttpRobot()
    if robot.alive():
        assert False, "A dev robot may NOT already be running when this test runs."
    server.start()
    assert robot.wait_until_alive(6), "Dev Robot never became available."
    protocols_to_create = 13
    for _ in range(protocols_to_create):
        time.sleep(0.5)
        file = create_minimal_protocol()
        robot.post_protocol([Path(file.name)])
        file.close()
    server.stop()
    assert robot.wait_until_dead(12), "Dev Robot did not stop."
    server.start()
    assert robot.wait_until_alive(6), "Dev Robot never became available."
    response = robot.get_protocols()
    # THE actual test step!
    assert len(response.json()["data"]) == protocols_to_create
    server.stop()
