const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const takeUntil = function(array, callback) {

  const result = [];

  for (let item of array) {

    if (!callback(item)) {

      result.push(item);

    } else {

      return result;

    }

  }
};

module.exports = takeUntil;