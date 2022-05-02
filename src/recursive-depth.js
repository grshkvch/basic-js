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
  
  calculateDepth(array, depth = 1) {
    if (array.some(element => Array.isArray(element))) {
        depth++;
        array = array.flat(1);
        return this.calculateDepth(array, depth);
    }
    return depth;
  }
}


module.exports = {
  DepthCalculator
};
