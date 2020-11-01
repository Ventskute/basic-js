const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let res = '';
  const {repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator = '|'} = options;
  for (i = 0; i < repeatTimes; i++) {
    res += str;
    if (additionRepeatTimes) {
      for (j = 0; j < additionRepeatTimes; j++) {
        res += addition;
        if (j !== additionRepeatTimes - 1) {
          res += additionSeparator;
        }
      }
    }
    if (i !== repeatTimes - 1) {
      res += separator;
    }
  }
  return res;
};
