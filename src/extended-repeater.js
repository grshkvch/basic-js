const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {

  let result = ''
  let addition = ''

  if (options.addition !== undefined) {                 //addition
    if (options.additionRepeatTimes !== undefined) {
        for (let j = 0; j < options.additionRepeatTimes; j++) {
            if (options.additionSeparator !== undefined) {
                  if (j !== (options.additionRepeatTimes - 1)) {
                    addition += options.addition + options.additionSeparator
                  } else {
                    addition += options.addition
                  }
            } else {
                  if (j !== (options.additionRepeatTimes - 1)) {
                    addition += options.addition + '|'
                  } else {
                    addition += options.addition
                  }
            }
        }
    } else {
      addition = options.addition
    }
}

if (options.repeatTimes == undefined || options.repeatTimes <= 0) {
    return str + addition
} else {
      for (let i = 0; i < options.repeatTimes; i++) {
        if (options.separator !== undefined) {
              if (i !== (options.repeatTimes - 1)) {
                result += str + addition + options.separator
              } else {
                result += str + addition
              }
        } else {
              if (i !== (options.repeatTimes - 1)) {
                result += str + addition + '+'
              } else {
                result += str + addition
              }
        }
      }
    return result
  }
}

module.exports = {
  repeater
};
