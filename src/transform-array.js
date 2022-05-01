const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  if (Array.isArray(arr) == false) {
    throw new Error ("'arr' parameter must be an instance of the Array!")
  }
let x2Next = '--double-next';
let x2Prev = '--double-prev';
let discNext = '--discard-next';
let discPrev = '--discard-prev';

let result = arr.slice()
    for (let i = 0; i < result.length; i++) {
        if (result[i] == x2Next) {
          if (i + 1 >= result.length) {
            result.splice(i, 1)
          } else {
            result[i] = result[i + 1]
          }

        } else if (result[i] == x2Prev) {
            if (i - 1 < 0) {
              result.splice(i, 1)
            } else {
              result[i] = result[i - 1]
            }
        } else if (result[i] == discNext) {
            if (i + 1 >= result.length) {
              result.splice(i, 1)
              i--
            } else {
              if (result[i + 2] == discPrev || result[i + 2] == x2Prev) {
                result.splice(i, 3);
                  i--
                } else {
                  result.splice(i, 2);
                  i--
                }
            }
        } else if (result[i] == discPrev) {
              if (i - 1 < 0) {
                result.splice(i, 1)
                i--
              } else {
                result.splice((i - 1), 2);
                i--
              }
      }
}
return result
}

module.exports = {
  transform
};
