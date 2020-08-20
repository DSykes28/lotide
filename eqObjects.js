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

const assertEqual = function(actual, expected) {

  if (actual === expected) {

    console.log(`💚💚💚 Assertion Passed: ${actual}  === ${expected}`);

  } else {

    console.log(`😡😡😡 Assertion Failed: ${actual} !== ${expected}`);
  }

};

const eqObjects = function(object1, object2) {

  if (Object.keys(object1).length === Object.keys(object2).length) {

    for (let key of Object.keys(object1)) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      
        if (!eqArrays(object1[key],object2[key])) {

          return false;
        
        }
      }
    }
    
    return true;
  }

  return false;
};

const ab = { a: "1", b: "2"};
const ba = { b: "2", a: "1"};
console.log(assertEqual(eqObjects(ab,ba),true));
const abc = { a: "1", b: "2", c: "3"};
console.log(assertEqual(eqObjects(ab,abc),false));
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(assertEqual(eqObjects(cd,dc),true));
const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(assertEqual(eqObjects(cd,cd2),false));