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
     return false
   }

  let result = '';
  let filtered = members.filter((elem) => typeof elem == 'string')
  let sorted = filtered.map((name) => {
      return name.trim().toUpperCase()
  }).sort()

  for (let name of sorted) {
      result += name.trim()[0].toUpperCase()
  }
  return result
}

module.exports = {
  createDreamTeam
};
