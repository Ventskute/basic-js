const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== "string") return false;
  const m = Number(sampleActivity);
  if (!m || m > 15 || m <= 0) return false;
  const k = 0.693 / 5730;
  return Math.ceil(Math.log(15/Number(sampleActivity))/k);
};
