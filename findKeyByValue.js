const assertEqual = require('./assertEqual');

const findKeyByValue = function(category, value) {

  for (let key in category) {
  
    if (value === category[key]) {
  
      return key;
  
    }
  }
};

module.exports = findKeyByValue;