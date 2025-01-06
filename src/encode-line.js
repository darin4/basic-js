const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let count = 0;
  let result = '';
  for (let i = 0; i < str.length; i++) {
    count++;
    if (str[i] !== str[i + 1]) {
      result += count + str[i];
      count = 0;
    }
  }
  return result.replace(/1/g, '');
  // remove line with error and write your code here
}

module.exports = {
  encodeLine
};
