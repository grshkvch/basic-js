const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  
  flag = true
  alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  constructor(mode){
    if(mode !== undefined){
      this.flag = mode;
    }
  }

  generateKeySequence(message, key) {
    let keySequence = ''
    if (key.length < message.length) {
      for (let i = 0; keySequence.length < message.length; i++) {
        for (let j = 0; j < key.length && keySequence.length < message.length; j++) {
          keySequence += key[j]
        }
      }
  } else if (key.length > message.length) {
      for (let i = 0; keySequence.length < message.length; i++) {
          keySequence += key[i]
        }
  } else {
      keySequence = key;
  }
  return keySequence;
}

  encrypt(message, key) {
    if (arguments.length < 2 || typeof arguments[0] !== 'string' || typeof arguments[1] !== 'string') {
      throw new Error('Incorrect arguments!')
    }

    let messageUpperCased = message.toUpperCase()
    let keySequence = instance.generateKeySequence(message, key).toUpperCase()
    let result = ''
    let tempCount = 0

    for (let i = 0; i < messageUpperCased.length; i++) {
      if (messageUpperCased[i].charCodeAt() >= 65 && messageUpperCased[i].charCodeAt() <= 90) {
          let messageLetterInd = instance.alphabet.indexOf(messageUpperCased[i])
          let keyLetterInd = instance.alphabet.indexOf(keySequence[i + tempCount])
          let encodedLetterInd = messageLetterInd + keyLetterInd;

          if (encodedLetterInd > 25) {
              result += instance.alphabet[encodedLetterInd - 26]
          } else {
              result += instance.alphabet[encodedLetterInd]
          }

      } else {
          result += messageUpperCased[i]
          tempCount--
      }
    }
    if (this.flag) {
        return result
    } else {
        let reversedResult = ''
          for (let i = 0; i < result.length; i++) {
            reversedResult = result[i] + reversedResult
          }
          return reversedResult
    }
  }

  decrypt(encryptedMessage, key) {
    if (arguments.length < 2 || typeof arguments[0] !== 'string' || typeof arguments[1] !== 'string') {
      throw new Error('Incorrect arguments!')
    }
    
    let keySequence = instance.generateKeySequence(encryptedMessage, key).toUpperCase()
    let result = ''
    let tempCount = 0

    for (let i = 0; i < encryptedMessage.length; i++) {
      if (encryptedMessage[i].charCodeAt() >= 65 && encryptedMessage[i].charCodeAt() <= 90) {
          let encryptedMessageLetterInd = instance.alphabet.indexOf(encryptedMessage[i])
          let keyLetterInd = instance.alphabet.indexOf(keySequence[i + tempCount])
          let unencodedLetterInd = encryptedMessageLetterInd - keyLetterInd;


          if (encryptedMessageLetterInd < keyLetterInd) {
              result += instance.alphabet[unencodedLetterInd + 26]
          } else {
              result += instance.alphabet[unencodedLetterInd]
          }

      } else {
          result += encryptedMessage[i]
          tempCount--
      }
    }
    if (this.flag) {
        return result
    } else {
        let reversedResult = ''
        for (let i = 0; i < result.length; i++) {
          reversedResult = result[i] + reversedResult
        }
        return reversedResult
    }
  }
}

let instance = new VigenereCipheringMachine()


module.exports = {
  VigenereCipheringMachine
};
