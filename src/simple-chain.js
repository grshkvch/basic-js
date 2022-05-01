const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  chain: [],
  finishedChain: [],
  getLength() {
    console.log(this.chain.length)
  },
  addLink(value = '( )') {
      this.chain.push(`( ${value} )`)
      return this
  },
  removeLink(position) {
      if (!this.chain[position - 1] || typeof position !== 'number' || !Number.isInteger(position)) {
        this.chain = []
        throw new Error('You can\'t remove incorrect link!')
      }
      this.chain.splice((position - 1), 1)
      return this
  },
  reverseChain() {
    this.chain.reverse()
    return this
  },
  finishChain() {
    this.finishedChain = this.chain.slice()
    this.chain = []
    let result = this.finishedChain.join('~~')
    return result
  }
};

module.exports = {
  chainMaker
};
