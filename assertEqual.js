const assertEqual = function(actual, expected) {

  if(actual === expected) {

    console.log(`💚💚💚 Assertion Passed: ${actual}  === ${expected}`)

  } else {

    console.log(`😡😡😡 Assertion Failed: ${actual} !== ${expected}`)
  }

};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual('Batman', 'batman');
assertEqual(2344, 2344);
assertEqual('Cyberpunk', 'Cyberpunk');
assertEqual(false, false);