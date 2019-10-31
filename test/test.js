const data = require("../data/dinvishesh.json");
const index = require("../index.js");

const assert = require("chai").assert;

describe("dinVisheshToday", () => {
    it(`does not return undefined for the current day`, () => {
        assert.isDefined(index.dinVisheshToday());
    });
});

describe("dinVishesh", () => {
    const categoryMonthDayTheories = [
        ["janm", "february", "29"],
        ["mrutyu", "april", "20"],
        ["ghatana", "september", "15"]
    ];
    
    categoryMonthDayTheories.map(([category, month, day]) => {
        it(`returns data for ${category}/${month}/${day}`, () => {
            assert.equal(
                index.dinVishesh(category, month, day),
                data.category[category][month][day]
            );
        });
    });
    
    const categoryMonthTheories = [
        ["janm", "february", undefined],
        ["mrutyu", "april", ""],
        ["ghatana", "september", ""]
    ];
    
    categoryMonthTheories.map(([category, month, day]) => {
        it(`returns data for ${category}/${month} without day`, () => {
            assert.equal(
                index.dinVishesh(category, month, day),
                data.category[category][month]
            );
        });
    });
    
    const categoryTheories = [
        ["janm", undefined, undefined],
        ["mrutyu", "", ""],
        ["ghatana", "", ""],
    ];
    
    categoryTheories.map(([category, month, day]) => {
        it(`returns data for ${category} without month or day`, () => {
            assert.equal(
                index.dinVishesh(category, month, day),
                data.category[category]
            );
        });
    });
});

describe("dinVisheshAll", () => {
    it("returns the same data as in dinvishesh.json", () => {
        assert.equal(index.dinVisheshAll(), data);
    });
});

describe("dinVisheshByCategory", () => {
    const definedTheories = [
        ["janm"],
        ["mrutyu"],
        ["ghatana"]
    ];
    
    definedTheories.map(([category]) => {
        it(`returns data from dinvishesh.json for category ${category}`, () => {
            assert.equal(
                index.dinVisheshByCategory(category),
                data.category[category]
            );
        });
    });
    
    const undefinedTheories = [
        ["foo"],
        ["bar"],
        ["baz"],
    ];
    
    undefinedTheories.map(([category]) => {
        it(`returns undefined for missing category ${category}`, () => {
            assert.isUndefined(index.dinVisheshByCategory("foo"));
        });
    });
});