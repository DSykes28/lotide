const assertEqual = function(actual, expected) {

  if (actual === expected) {

    console.log(`💚💚💚 Assertion Passed: ${actual}  === ${expected}`);

  } else {

    console.log(`😡😡😡 Assertion Failed: ${actual} !== ${expected}`);
  }

};
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const findKeyByValue = function(category, value) {

  for (let key in category) {
  
    if (value === category[key]) {
  
      return key;
  
    }
  }
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
