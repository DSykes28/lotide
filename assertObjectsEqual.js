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

const eqObjects = function(actaul, object2) {

  if (Object.keys(actaul).length === Object.keys(object2).length) {

    for (let key of Object.keys(actaul)) {
      if (Array.isArray(actaul[key]) && Array.isArray(object2[key])) {
      
        if (!eqArrays(actaul[key],object2[key])) {

          return false;
        
        }
      }
    }
    
    return true;
  }

  return false;
};

const assertObjectsEqual = function(actual, expected) {

  const inspect = require('util').inspect;
  
  if (eqObjects(actual, expected)) {
  
    console.log(`✅✅✅  Assertion passed: ${inspect(actual)} === ${inspect(expected)}`);
  
  } else {
  
    console.log(`🛑🛑🛑  Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`);
  
  }
};

const ab = { a: "1", b: "2"};
const ba = { b: "2", a: "1"};
console.log(assertObjectsEqual(eqObjects(ab,ba),true));
const abc = { a: "1", b: "2", c: "3"};
console.log(assertObjectsEqual(eqObjects(ab,abc),false));
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(assertObjectsEqual(eqObjects(cd,dc),true));
const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(assertObjectsEqual(eqObjects(cd,cd2),false));