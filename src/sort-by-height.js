const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(array) {
  for(let i = 0; i < array.length - 1; i++) {
		if (array[i] === -1) continue;
		for(let j = i + 1; j < array.length; j++) {
			if (array[j] === -1) continue;
			if (array[i] > array[j]) {
				let tmp = array[i];
				array[i] = array[j];
				array[j] = tmp;
			}
		}
	}
	return array;
}

module.exports = {
  sortByHeight
};
