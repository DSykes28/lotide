const without = function(array, value) {
  let newArray = [];
  
  array.forEach(function(element) {
  
    if (!value.includes(element)) {
  
      newArray.push(element);
  
    }
  
  });
  
  return newArray;

};

module.exports = without;