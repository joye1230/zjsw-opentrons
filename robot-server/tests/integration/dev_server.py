import subprocess
import signal
import sys


class DevServer:
    def __init__(self, server_temp_directory: str) -> None:
        self.server_temp_directory = server_temp_directory

    def start(self) -> None:
        """Run the robot server in a background process."""
        # In order to collect coverage we run using `coverage`.
        # `-a` is to append to existing `.coverage` file.
        # `--source` is the source code folder to collect coverage stats on.
        self.proc = subprocess.Popen(
            [
                sys.executable,
                "-m",
                "coverage",
                "run",
                "-a",
                "--source",
                "robot_server",
                "-m",
                "uvicorn",
                "robot_server:app",
                "--host",
                "localhost",
                "--port",
                "15555",
            ],
            env={
                "OT_ROBOT_SERVER_DOT_ENV_PATH": "dev.env",
                "OT_API_CONFIG_DIR": self.server_temp_directory,
                "OT_ROBOT_SERVER_persistence_directory": f"{self.server_temp_directory}/robot_db/",
            },
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
        )

    def stop(self) -> None:
        """Stop the robot server."""
        self.proc.send_signal(signal.SIGTERM)
        # Calling the function the context manager would.
        self.proc.__exit__(None, None, None)
