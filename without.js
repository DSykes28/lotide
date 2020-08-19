const without = function(array, value) {
  let newArray = [];
  
  array.forEach(function(element) {
  
    if (!value.includes(element)) {
  
      newArray.push(element);
  
    }
  
  });
  
  return newArray;

};

console.log(without([1, 2, 3], [1])) // => [2, 3])
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"])
