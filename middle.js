let assertEqual = function(actual,expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`)
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};


let assertArraysEqual = function(array1,array2) {
  if(array1.length !== array2.length) {
    console.log(`🛑🛑🛑Assertion Failed: ${array1} !== ${array2}`);
    return;
  } else {
    for(let i = 0; i < array1.length; i++){
      if(array1[i] !== array2[i]){
        console.log(`🛑🛑🛑Assertion Failed: ${array1} !== ${array2}`);
        return;
      }
    }
  }console.log(`✅✅✅Assertion Passed: ${array1} === ${array2}`);
}

let middle = function(array){
  let output = [];
  if (array.length <= 2){
    return output;
  }
  let mid = array.length / 2;
  if(Number.isInteger(mid)){
    output.push(array[mid - 1],array[mid]);
  } else {
    output.push(array[Math.floor(mid)]);
  } return output;
}
console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
