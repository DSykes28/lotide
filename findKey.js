const assertEqual = require('./assertEqual');

const findKey = function(object, callback) {

  for (let item in object) {

    if (callback(object[item])) {

      console.log(object[item]);
      return item;
    }
  }

};

module.exports = findKey;