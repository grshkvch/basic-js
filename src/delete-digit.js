const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  let maxNumber = 0;
  let str = n.toString()
  let deletedStr = ''
  console.log(str)

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str.length; j++) {
      if (j !== i) {
        deletedStr += str[j]
      }
    }
    if (Number(deletedStr) > maxNumber) {
      maxNumber = Number(deletedStr)
    }
    console.log('del', deletedStr)
    deletedStr = ''
  } 
  return maxNumber
}

module.exports = {
  deleteDigit
};
