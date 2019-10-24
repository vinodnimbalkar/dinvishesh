const dinVisheshData = require("./data/dinvishesh.json");

const monthNames = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december"
];

const categoryList = ["janm", "mrutyu", "ghatana"];

const date = new Date();
const currentDay = date.getDate();
const currentMonth = monthNames[date.getMonth()];

const dinVisheshToday = () => {
  dataToday = categoryList.map(
    cat => dinVisheshData.category[cat][currentMonth][currentDay]
  );
  let responseData = {
    janm: dataToday[0],
    mrutyu: dataToday[1],
    ghatana: dataToday[2]
  };
  return responseData;
};

const dinVishesh = (category = "janm", month, day) => {
  if (
    category !== undefined &&
    category !== "" &&
    month !== undefined &&
    month !== "" &&
    day !== undefined &&
    day !== ""
  ) {
    console.log(day);
    return dinVisheshData.category[category][month][day];
  } else if (
    category !== undefined &&
    category !== "" &&
    month !== undefined &&
    month !== ""
  ) {
    return dinVisheshData.category[category][month];
  } else {
    return dinVisheshData.category[category];
  }
};

const dinVisheshAll = () => {
  return dinVisheshData;
};

const dinVisheshByCategory = category => {
  return dinVisheshData.category[category];
};

module.exports = {
  dinVisheshToday,
  dinVishesh,
  dinVisheshAll,
  dinVisheshByCategory
};
