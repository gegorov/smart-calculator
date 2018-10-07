class SmartCalculator {
  constructor(initialValue) {
    this.value = initialValue;
  }

  add(number) {
    this.value = `${this.value}+${number}`;
    return this;
  }

  subtract(number) {
    this.value = `${this.value}-${number}`;
    return this;
  }

  multiply(number) {
    this.value = `${this.value}*${number}`;
    return this;
  }

  devide(number) {
    this.value = `${this.value}/${number}`;
    return this;
  }

  pow(number) {
    this.value = `${this.value}**${number}`;
    return this;
  }

  toString() {
    return eval(this.value);// eslint-disable-line
  }
}

module.exports = SmartCalculator;
