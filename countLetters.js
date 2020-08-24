const assertEqual = require('./assertEqual');

const countLetters = function(string) {

  let cleanedString = string.split(" ").join('');
  
  let results = {};
  
  for (let letter of cleanedString) {
  
    if (results[letter]) {
      
      results[letter] += 1;

    } else {
      
      results[letter] = 1;
    }
  }

  return results;

};

module.exports = countLetters;