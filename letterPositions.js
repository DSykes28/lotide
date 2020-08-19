const assertArraysEqual = function(array1, array2) {
  
  if (eqArrays(array1, array2)) {
  
    console.log(`💚  Assertion passed: ${array1} === ${array2}`);
  
  } else {
  
    console.log(`😡  Assertion failed: ${array1} !== ${array2}`);
  
  }
};

const eqArrays = function(array1, array2) {
 
  if (array1.length !== array2.length) {
 
    return false;
  
  }

  for (let value = 0; value < array1.length; value += 1) {
 
    if ((Array.isArray(array1[value]) || Array.isArray(array2[value])) && eqArrays(array1[value], array2[value]) === false) {
 
      return false;
 
    } else if (Array.isArray(array1[value]) || Array.isArray(array2[value])) {
 
      eqArrays(array1[value], array2[value]);
 
    } else if (array1[value] !== array2[value]) {
 
      return false;

    }
  }

  return true;
};

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

assertArraysEqual(letterPositions("hello").e, [1]);

console.log(letterPositions('This sentence is not very long'));