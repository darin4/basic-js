const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  let team = "";
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === 'string') {
      const name = members[i].trim();
      if (name.length > 0) {
        team += name[0].toUpperCase();
      }
    }
  }

  return team.split("").sort().join("");
  // remove line with error and write your code here
}

module.exports = {
  createDreamTeam
};
