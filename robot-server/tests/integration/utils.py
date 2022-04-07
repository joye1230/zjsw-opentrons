from typing import Optional, IO
import time
from tests.integration.dev_server import DevServer

import secrets
import tempfile
import secrets
from requests import Response
from typing import Any, Callable, Optional, IO

Func = Callable[..., Any]



def verify_settings_value(response: Response, id: str, value: str) -> None:
    """Verify settings are updated as expectted"""
    for setting in response.json().get("settings"):
        if setting.get("id") == id:
            assert str(setting.get("value")) == str(value)
            return
    assert False

def wait_until(
    predicate: Func,
    predicate_target: bool,
    timeout_sec: float,
    period_sec: float = 0.25,
    **kwargs: Optional[Any]
) -> bool:
    """Wait until a predicate returns predicate_target or timeout."""
    mustend = time.time() + timeout_sec
    while time.time() < mustend:
        if predicate(**kwargs) == predicate_target:
            return True
        time.sleep(period_sec)
    return False


def create_minimal_protocol(protocol_name: str = secrets.token_urlsafe(16)) -> IO[bytes]:
    """Create an file requests may use to upload."""
    file = tempfile.NamedTemporaryFile(suffix=".py")  # , delete=False)
    file_contents = f'''from opentrons import protocol_api

metadata = {{
    "protocolName": "{protocol_name}",
    "author": "Opentrons <protocols@opentrons.com>",
    "source": "Protocol Library",
    "apiLevel": "2.12",
}}


def run(ctx: protocol_api.ProtocolContext) -> None:
    """This method is run by the protocol engine."""

    ctx.comment("A single comment.")
'''
    file.write(str.encode(file_contents))
    file.seek(0)
    return file