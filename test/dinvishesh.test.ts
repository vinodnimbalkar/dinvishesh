import { category } from '../src/data';
import {
  dinVisheshToday,
  dinVishesh,
  dinVisheshAll,
  dinVisheshByCategory,
  dinVisheshByCategoryAndMonth,
} from '../dist';

describe('dinVisheshToday', () => {
  it(`does not return undefined for the current day`, () => {
    expect(dinVisheshToday()).toBeDefined();
  });
});

describe('dinVishesh', () => {
  const categoryMonthDayTheories = [
    ['janm', 'february', '29'],
    ['mrutyu', 'april', '20'],
    ['ghatana', 'september', '15'],
  ];

  categoryMonthDayTheories.forEach(([cat, month, day]) => {
    it(`returns data for ${cat}/${month}/${day}`, () => {
      expect(dinVishesh(cat, month, day)).toStrictEqual(
        category[cat][month][day]
      );
    });
  });
});

describe('dinVisheshByCategoryAndMonth', () => {
  const categoryMonthTheories = [
    ['janm', 'february'],
    ['mrutyu', 'april'],
    ['ghatana', 'september'],
  ];

  categoryMonthTheories.forEach(([cat, month]) => {
    it(`returns data for ${cat}/${month} without day`, () => {
      expect(dinVisheshByCategoryAndMonth(cat, month)).toStrictEqual(
        category[cat][month]
      );
    });
  });
});

describe('dinVisheshAll', () => {
  it('returns the same data as in dinvishesh.json', () => {
    expect(dinVisheshAll()).toStrictEqual(category);
  });
});

describe('dinVisheshByCategory', () => {
  const definedTheories = [['janm'], ['mrutyu'], ['ghatana']];

  definedTheories.forEach(([cat]) => {
    it(`returns data from dinvishesh.json for category ${cat}`, () => {
      expect(dinVisheshByCategory(cat)).toStrictEqual(category[cat]);
    });
  });

  const undefinedTheories = [['foo'], ['bar'], ['baz']];

  undefinedTheories.forEach(([category]) => {
    it(`returns undefined for missing category ${category}`, () => {
      expect(dinVisheshByCategory('foo')).toBeUndefined();
    });
  });
});
