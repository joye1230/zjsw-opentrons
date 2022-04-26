import lzma
import os
import subprocess
import re
import zipfile
from unittest import mock

import pytest

from otupdate import buildroot, common

from otupdate import openembedded
from tests.common.config import FakeRootPartElem

HERE = os.path.abspath(os.path.dirname(__file__))
COMMON = os.path.abspath(os.path.dirname("common"))


@pytest.fixture(params=[openembedded, buildroot])
async def test_cli(aiohttp_client, loop, otupdate_config, request):
    """
    Build an app using dummy versions, then build a test client and return it
    """
    cli_client_pkg = request.param
    app = cli_client_pkg.get_app(
        system_version_file=os.path.join(HERE, "version.json"),
        config_file_override=otupdate_config,
        name_override="opentrons-test",
        boot_id_override="dummy-boot-id-abc123",
        loop=loop,
    )
    client = await loop.create_task(aiohttp_client(app))
    return client, cli_client_pkg.__name__


@pytest.fixture
def downloaded_update_file_common(request, extracted_update_file_common):
    """
    Return the path to a zipped update file

    To exclude files, mark with ``exclude_rootfs_ext4``,
    ``exclude_rootfs_ext4_hash``, ``exclude_rootfs_ext4_hash_sig``.

    This uses :py:meth:`extracted_update_file` to generate the contents, so
    marks that fixture understands can be used when requesting this fixture

    Can also be used by tests that will upload it to a test server, since
    when the test server boots its download path will be somewhere else
    """
    zip_path_arr = []
    list_of_update_files = [
        ("rootfs.xz", "rootfs.xz.sha256", "rootfs.xz.hash.sig", "ot3-system.zip"),
        ("rootfs.ext4", "rootfs.ext4.hash", "rootfs.ext4.hash.sig", "ot2-system.zip"),
    ]
    for index, (rootfs, sha256, sig, pkg) in enumerate(list_of_update_files):
        rootfs_path = os.path.join(extracted_update_file_common[index], rootfs)
        hash_path = os.path.join(extracted_update_file_common[index], sha256)
        sig_path = os.path.join(extracted_update_file_common[index], sig)
        zip_path = os.path.join(extracted_update_file_common[index], pkg)
        with zipfile.ZipFile(zip_path, "w") as zf:
            if not request.node.get_closest_marker("exclude_rootfs_ext4"):
                zf.write(rootfs_path, rootfs)
            if not request.node.get_closest_marker("exclude_rootfs_ext4_hash"):
                zf.write(hash_path, sha256)
            if not request.node.get_closest_marker("exclude_rootfs_ext4_hash_sig"):
                zf.write(sig_path, sig)
            zip_path_arr.append(zip_path)
        os.unlink(rootfs_path)
        os.unlink(hash_path)
        os.unlink(sig_path)

    return zip_path_arr


@pytest.fixture
def extracted_update_file_common(request, tmpdir):
    """
    Return the path to a dir containing an unzipped update file.

    To make a bad hash, mark with ``bad_hash``. To make a bad
    signature, mark with ``bad_sig``.
    """
    extracted_files_dir_path_arr = []
    list_of_extracted_files = [
        (
            "rootfs.xz",
            "rootfs.xz.sha256",
            "rootfs.xz.hash.sig",
        ),
        (
            "rootfs.ext4",
            "rootfs.ext4.hash",
            "rootfs.ext4.hash.sig",
        ),
    ]
    for (rootfs, sha256, sig) in list_of_extracted_files:
        rootfs_path = os.path.join(tmpdir, rootfs)
        hash_path = os.path.join(tmpdir, sha256)
        sig_path = os.path.join(tmpdir, sig)
        uncomp_xz_path = os.path.join(tmpdir, "tmp_uncomp")
        rootfs_contents = os.urandom(100000)
        if rootfs == "rootfs.xz":
            with lzma.open(rootfs_path, "w") as f:
                f.write(rootfs_contents)
            with lzma.open(rootfs_path, "rb") as fsrc, open(uncomp_xz_path, "wb") as fdst:
                while True:
                    chunk = fsrc.read(1024)
                    fdst.write(chunk)
                    if len(chunk) != 1024:
                        break
        else:
            with open(rootfs_path, "wb") as rfs:
                rfs.write(rootfs_contents)
        if request.node.get_closest_marker("bad_hash"):
            hashval = b"0oas0ajcs0asd0asjc0ans0d9ajsd0ian0s9djas"
        else:
            try:
               # if rootfs == "rootfs.xz":
                   # shasum_out = subprocess.check_output(
                   #     ["shasum", "-a", "256", uncomp_xz_path]
                   # )
                # else:
                shasum_out = subprocess.check_output(
                    ["shasum", "-a", "256", rootfs_path]
                )
            except (subprocess.CalledProcessError, FileNotFoundError):
                pytest.skip("no shasum invokeable on command line")
            hashval = re.match(b"^([a-z0-9]+) ", shasum_out).group(1)
        with open(hash_path, "wb") as rfsh:
            rfsh.write(hashval)
        if not request.node.get_closest_marker("bad_sig"):
            try:
                subprocess.check_output(["openssl", "version"])
            except (subprocess.CalledProcessError, FileNotFoundError):
                pytest.skip("requires openssl binary to be installed")
            subprocess.check_call(
                [
                    "openssl",
                    "dgst",
                    "-sha256",
                    "-sign",
                    os.path.join(COMMON, "ot-update-server-unit-tests.key"),
                    "-out",
                    sig_path,
                    hash_path,
                ]
            )
        else:
            with open(sig_path, "wb") as sigfile:
                sigfile.write(os.urandom(256))
        extracted_files_dir_path_arr.append(tmpdir)
    return extracted_files_dir_path_arr


@pytest.fixture
def testing_partition(monkeypatch, tmpdir):
    partfile = os.path.join(tmpdir, "fake-partition")
    partfile2 = os.path.join(tmpdir, "fake2-partition")
    find_unused = mock.Mock()
    find_unused2 = mock.Mock()
    monkeypatch.setattr(buildroot.update_actions, "_find_unused_partition", find_unused)

    find_unused.return_value = FakeRootPartElem(
        "TWO", common.update_actions.Partition(2, partfile)
    )
    find_unused2.return_value = FakeRootPartElem(
        "ONE", common.update_actions.Partition(1, partfile2)
    )
    return partfile
