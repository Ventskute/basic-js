const CustomError = require("../extensions/custom-error");

const chainMaker = {
  length: 0,
  chain: '',
  getLength() {

  },
  addLink(value) {
    if (this.length >= 1) this.chain += '~~';
    if (value === NaN || value === null) {
      this.chain +=  `( ${value} )`
    }else {
      this.chain += `( ${value.toString()} )`;
    }
    this.length++;
    return this;
  },
  removeLink(position) {
    if (position <= 0 || (position % 1 !== 0) || isNaN(position)) {
      this.chain = '';
      this.length = 0;
      throw new Error;
    }
    let arr = this.chain.split('~~');
    const left = arr.splice(0, position -1);
    const right = arr.splice(1);
    arr = left.concat(right);
    this.chain = arr.join('~~');
    return this;
  },
  reverseChain() {
    this.chain = this.chain.split('~~').reverse().join('~~');
     return this;
  },
  finishChain() {
    const chain = this.chain;
    this.chain = '';
    this.length = 0;
    return chain;
  }
};

module.exports = chainMaker;
