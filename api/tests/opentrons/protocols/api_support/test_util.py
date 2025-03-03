import pytest

from opentrons.protocols.context.protocol_api.labware import LabwareImplementation
from opentrons.types import Point, Location, Mount
from opentrons.protocols.api_support.types import APIVersion
from opentrons.protocol_api.labware import Labware, get_labware_definition
from opentrons.protocols.geometry.deck import Deck
from opentrons.protocols.api_support.util import (
    AxisMaxSpeeds,
    build_edges,
    _find_value_for_api_version,
)
from opentrons.hardware_control.types import Axis


def test_max_speeds_userdict():
    defaults = AxisMaxSpeeds()
    assert defaults.data == {}
    assert dict(defaults) == {}

    with pytest.raises(KeyError):
        defaults["asdas"] = 2

    with pytest.raises(AssertionError):
        defaults["x"] = -1

    with pytest.raises(AssertionError):
        defaults["y"] = "ggg"

    with pytest.raises(KeyError):
        defaults["b"] = 2

    with pytest.raises(KeyError):
        defaults["c"] = 3

    defaults["x"] = 2
    defaults[Axis.A] = 20

    assert defaults["X"] == 2
    assert defaults["x"] == 2
    assert defaults[Axis.X] == 2

    assert defaults["A"] == 20
    assert defaults["a"] == 20
    assert defaults[Axis.A] == 20

    assert sorted(list(defaults.keys())) == sorted(["X", "A"])
    assert "X" in defaults.keys()

    del defaults["A"]
    assert "A" not in defaults

    defaults["x"] = None
    assert "x" not in defaults


def test_build_edges():
    lw_def = get_labware_definition("corning_96_wellplate_360ul_flat")
    test_lw = Labware(
        implementation=LabwareImplementation(lw_def, Location(Point(0, 0, 0), None))
    )
    off = Point(0, 0, 1.0)
    deck = Deck()
    old_correct_edges = [
        test_lw["A1"].from_center_cartesian(x=1.0, y=0, z=1) + off,
        test_lw["A1"].from_center_cartesian(x=-1.0, y=0, z=1) + off,
        test_lw["A1"].from_center_cartesian(x=0, y=1.0, z=1) + off,
        test_lw["A1"].from_center_cartesian(x=0, y=-1.0, z=1) + off,
    ]
    res = build_edges(test_lw["A1"], 1.0, Mount.RIGHT, deck, version=APIVersion(2, 2))
    assert res == old_correct_edges

    new_correct_edges = [
        test_lw["A1"].from_center_cartesian(x=1.0, y=0, z=1) + off,
        test_lw["A1"].from_center_cartesian(x=-1.0, y=0, z=1) + off,
        test_lw["A1"].from_center_cartesian(x=0, y=0, z=1) + off,
        test_lw["A1"].from_center_cartesian(x=0, y=1.0, z=1) + off,
        test_lw["A1"].from_center_cartesian(x=0, y=-1.0, z=1) + off,
    ]
    res2 = build_edges(test_lw["A1"], 1.0, Mount.RIGHT, deck, version=APIVersion(2, 4))
    assert res2 == new_correct_edges


def test_build_edges_left_pipette(ctx):
    test_lw = ctx.load_labware("corning_96_wellplate_360ul_flat", "2")
    test_lw2 = ctx.load_labware("corning_96_wellplate_360ul_flat", "6")
    mod = ctx.load_module("magnetic module", "3")
    mod.load_labware("corning_96_wellplate_360ul_flat")
    off = Point(0, 0, 1.0)
    left_pip_edges = [
        test_lw["A12"].from_center_cartesian(x=-1.0, y=0, z=1) + off,
        test_lw["A12"].from_center_cartesian(x=0, y=0, z=1) + off,
        test_lw["A12"].from_center_cartesian(x=0, y=1.0, z=1) + off,
        test_lw["A12"].from_center_cartesian(x=0, y=-1.0, z=1) + off,
    ]
    # Test that module in slot 3 results in modified edge list
    res = build_edges(
        test_lw["A12"],
        1.0,
        Mount.LEFT,
        ctx._implementation.get_deck(),
        version=APIVersion(2, 4),
    )
    assert res == left_pip_edges

    left_pip_edges = [
        test_lw2["A12"].from_center_cartesian(x=-1.0, y=0, z=1) + off,
        test_lw2["A12"].from_center_cartesian(x=0, y=0, z=1) + off,
        test_lw2["A12"].from_center_cartesian(x=0, y=1.0, z=1) + off,
        test_lw2["A12"].from_center_cartesian(x=0, y=-1.0, z=1) + off,
    ]
    # Test that labware in slot 6 results in modified edge list
    res2 = build_edges(
        test_lw2["A12"],
        1.0,
        Mount.LEFT,
        ctx._implementation.get_deck(),
        version=APIVersion(2, 4),
    )
    assert res2 == left_pip_edges


def test_build_edges_right_pipette(ctx):
    test_lw = ctx.load_labware("corning_96_wellplate_360ul_flat", "2")
    test_lw2 = ctx.load_labware("corning_96_wellplate_360ul_flat", "6")
    mod = ctx.load_module("magnetic module", "1")
    mod.load_labware("corning_96_wellplate_360ul_flat")
    off = Point(0, 0, 1.0)
    right_pip_edges = [
        test_lw["A1"].from_center_cartesian(x=1.0, y=0, z=1) + off,
        test_lw["A1"].from_center_cartesian(x=0, y=0, z=1) + off,
        test_lw["A1"].from_center_cartesian(x=0, y=1.0, z=1) + off,
        test_lw["A1"].from_center_cartesian(x=0, y=-1.0, z=1) + off,
    ]
    # Test that module in slot 1 results in modified edge list
    res = build_edges(
        test_lw["A1"],
        1.0,
        Mount.RIGHT,
        ctx._implementation._deck_layout,
        version=APIVersion(2, 4),
    )
    assert res == right_pip_edges

    right_pip_edges = [
        test_lw2["A12"].from_center_cartesian(x=1.0, y=0, z=1) + off,
        test_lw2["A12"].from_center_cartesian(x=-1.0, y=0, z=1) + off,
        test_lw2["A12"].from_center_cartesian(x=0, y=0, z=1) + off,
        test_lw2["A12"].from_center_cartesian(x=0, y=1.0, z=1) + off,
        test_lw2["A12"].from_center_cartesian(x=0, y=-1.0, z=1) + off,
    ]
    # Test that labware in slot 6 results in unmodified edge list
    res2 = build_edges(
        test_lw2["A12"],
        1.0,
        Mount.RIGHT,
        ctx._implementation.get_deck(),
        version=APIVersion(2, 4),
    )
    assert res2 == right_pip_edges


@pytest.mark.parametrize(
    "data,level,desired",
    [
        ({"2.0": 5}, APIVersion(2, 0), 5),
        ({"2.0": 5}, APIVersion(2, 5), 5),
        ({"2.6": 4, "2.0": 5}, APIVersion(2, 1), 5),
        ({"2.6": 4, "2.0": 5}, APIVersion(2, 6), 4),
        ({"2.0": 5, "2.6": 4}, APIVersion(2, 3), 5),
        ({"2.0": 5, "2.6": 4}, APIVersion(2, 6), 4),
    ],
)
def test_find_value_for_api_version(data, level, desired):
    assert _find_value_for_api_version(level, data) == desired
