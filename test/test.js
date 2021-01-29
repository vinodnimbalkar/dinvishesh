import data from '../data/data.js';
import {
  dinVisheshToday,
  dinVishesh,
  dinVisheshAll,
  dinVisheshByCategory,
} from '../src/index.js';

import chai from 'chai';
const { assert } = chai;

describe('dinVisheshToday', () => {
  it(`does not return undefined for the current day`, () => {
    assert.isDefined(dinVisheshToday());
  });
});

describe('dinVishesh', () => {
  const categoryMonthDayTheories = [
    ['janm', 'february', '29'],
    ['mrutyu', 'april', '20'],
    ['ghatana', 'september', '15'],
  ];

  categoryMonthDayTheories.map(([category, month, day]) => {
    it(`returns data for ${category}/${month}/${day}`, () => {
      assert.equal(
        dinVishesh(category, month, day),
        data.category[category][month][day]
      );
    });
  });

  const categoryMonthTheories = [
    ['janm', 'february', undefined],
    ['mrutyu', 'april', ''],
    ['ghatana', 'september', ''],
  ];

  categoryMonthTheories.map(([category, month, day]) => {
    it(`returns data for ${category}/${month} without day`, () => {
      assert.equal(
        dinVishesh(category, month, day),
        data.category[category][month]
      );
    });
  });

  const categoryTheories = [
    ['janm', undefined, undefined],
    ['mrutyu', '', ''],
    ['ghatana', '', ''],
  ];

  categoryTheories.map(([category, month, day]) => {
    it(`returns data for ${category} without month or day`, () => {
      assert.equal(dinVishesh(category, month, day), data.category[category]);
    });
  });
});

describe('dinVisheshAll', () => {
  it('returns the same data as in dinvishesh.json', () => {
    assert.equal(dinVisheshAll(), data);
  });
});

describe('dinVisheshByCategory', () => {
  const definedTheories = [['janm'], ['mrutyu'], ['ghatana']];

  definedTheories.map(([category]) => {
    it(`returns data from dinvishesh.json for category ${category}`, () => {
      assert.equal(dinVisheshByCategory(category), data.category[category]);
    });
  });

  const undefinedTheories = [['foo'], ['bar'], ['baz']];

  undefinedTheories.map(([category]) => {
    it(`returns undefined for missing category ${category}`, () => {
      assert.isUndefined(dinVisheshByCategory('foo'));
    });
  });
});
