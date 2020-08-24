const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

const letterPositions = function(sentence) {
  
  let letters = sentence.split(''); // split sentence down to individual letters and spaces
  
  const results = {};
  
  letters.forEach(function(letter, index) {
  
    if (letter !== " ") { // ignore spaces
  
      if (results[letter]) {

        results[letter].push(index);

      } else {
        
        results[letter] = [index];
  
      }
    }
  });
  
  return results;
};

module.exports = letterPositions;