import dinVisheshData from '../data/data.js';

/**
 * A constant variable called 'monthNames'
 * @constant {Array} - The name of months
 */
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

/**
 * A constant variable called 'categoryList'
 * @constant {Array}
 */
const categoryList = ["janm", "mrutyu", "ghatana"];

/**
 * A constant variable called 'date'
 * @constant {Date}
 */
const date = new Date();

/**
 * A constant variable called 'currentday'
 * @constant {number}
 */
const currentDay = date.getDate();

/**
 * A constant variable called 'monthNames'
 * @constant {String}
 */
const currentMonth = monthNames[date.getMonth()];

/**
 * Retrives dinvishesh of current date
 * @returns {Object}
 */
const dinVisheshToday = () => {
  let dataToday = categoryList.map(
    cat => dinVisheshData.category[cat][currentMonth][currentDay]
  );
  let responseData = {
    janm: dataToday[0],
    mrutyu: dataToday[1],
    ghatana: dataToday[2]
  };
  return responseData;
};

/**
 * Retrives a dinvishesh by category, month, day
 * @function
 * @param {String} category
 * @param {String} month
 * @param {String} day
 * @returns {Array}
 */
const dinVishesh = (category = "janm", month, day) => {
  if (
    category !== undefined &&
    category !== "" &&
    month !== undefined &&
    month !== "" &&
    day !== undefined &&
    day !== ""
  ) {
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

/**
 * Get all dinvishesh
 * @returns {Object} - The dinvishesh contaning category
 */
const dinVisheshAll = () => {
  return dinVisheshData;
};

/**
 * Retrives dinvishesh by category
 * @param {String} category - The Category of dinvishesh e.g. janm, mrutyu, ghatana
 * @returns {Object}
 */
const dinVisheshByCategory = category => {
  return dinVisheshData.category[category];
};
/**
 * Module exports
 */
module.exports = {
  dinVisheshToday,
  dinVishesh,
  dinVisheshAll,
  dinVisheshByCategory
};
