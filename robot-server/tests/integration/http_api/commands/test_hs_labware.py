import asyncio
import json
from pathlib import Path
import secrets
from typing import Callable, Dict, IO, List

from httpx import Response
from tests.integration.robot_client import RobotClient



async def print_response(response: Response) -> None:
    print(f"\n{response.url}")
    formatted_response_body = json.dumps(response.json(), indent=4)
    print(formatted_response_body)
    with open("responses.log", "a") as log:
        log.write(formatted_response_body)
async def test_things():
    async with RobotClient.make(
        host="http://192.168.50.89", port=31950, version="*"
    ) as robot_client:
        await robot_client.wait_until_alive()
        health = await robot_client.get_health()
        await print_response(health)