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

const middle = function(array) {

  if (array.length <= 2) {
  
    return [];
  
  } else if (array.length % 2 === 0) {
  
    return [array[Math.ceil(array.length / 2) - 1], array[Math.ceil(array.length / 2)]];
  
  } else {
  
    return [array[Math.floor(array.length / 2)]];
  
  }

};

console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
