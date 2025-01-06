const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const result = {};
  domains.forEach(domain => {
    const domainArr = domain.split('.').reverse();
    let str = '';
    domainArr.forEach((item, index) => {
      str += `.${item}`;
      result[str] = result[str] ? result[str] + 1 : 1;
    });
  });

  return result;
  // remove line with error and write your code here
}

module.exports = {
  getDNSStats
};
