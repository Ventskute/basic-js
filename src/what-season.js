const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  if (Object.prototype.toString.call(date) === '[object Date]') {
    const month = date.getMonth();
    switch (true) {
      case month < 2:
      case month === 11:
        return 'winter';
        break;
      case month < 5:
        return 'spring';
        break;
      case month < 8:
        return 'summer';
        break;
      case month < 11:
        return 'autumn';
        break;
    }
  } else {
        throw new Error();
  }
};
