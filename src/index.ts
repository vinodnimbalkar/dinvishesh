import { category } from './data';

const monthNames: string[] = [
  'january',
  'february',
  'march',
  'april',
  'may',
  'june',
  'july',
  'august',
  'september',
  'october',
  'november',
  'december',
];
const categoryList: string[] = ['janm', 'mrutyu', 'ghatana'];
const date: Date = new Date();
const currentDay: number = date.getDate();
const currentMonth: string = monthNames[date.getMonth()];

const dinVisheshToday = () => {
  const dataToday = categoryList.map(
    cat => category[cat][currentMonth][currentDay]
  );
  const [janm, mrutyu, ghatana] = dataToday;
  let responseData = {
    janm,
    mrutyu,
    ghatana,
  };
  return responseData;
};

const dinVishesh = (cat: string = 'janm', month: string, day: string) => {
  if (category && month && day) {
    return category[cat][month][day];
  }
};

const dinVisheshByCategoryAndMonth = (cat: string, month: string) => {
  return category[cat][month];
};

const dinVisheshAll = () => {
  return category;
};

const dinVisheshByCategory = (cat: string) => {
  return category[cat];
};

export {
  dinVisheshToday,
  dinVishesh,
  dinVisheshByCategoryAndMonth,
  dinVisheshAll,
  dinVisheshByCategory,
};
