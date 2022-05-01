const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */

//  let count = 1
//  let temporaryCount = 1 
//  let result = 1
 
class DepthCalculator { 
  count = 1
  temporaryCount = 1 
  
  calculateDepth(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i]) == true) {
        calc.temporaryCount += 1
        calc.calculateDepth(arr[i])
      }
      if (i == (arr.length - 1)) {
        if (calc.temporaryCount > calc.count) {
          calc.count = calc.temporaryCount
          calc.temporaryCount = 1
        } else  {
          calc.temporaryCount = 1
        }
      }
    }
    
    return calc.count    
  }
}
const calc = new DepthCalculator()

module.exports = {
  DepthCalculator
};
