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

const assertArraysEqual = function(array1, array2) {
 
  if (eqArrays(array1, array2)) {
 
    console.log(`💚  Assertion passed: ${array1} === ${array2}`);
 
  } else {
 
    console.log(`😡  Assertion failed: ${array1} !== ${array2}`);
 
  }
};

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

// ...


// The array to work with
// The callback (which Lodash calls "predicate")


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(results1, [1, 2, 5, 7, 2]);
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);