const words = ["ground", "control", "to", "major", "tom"];
let map = function(array,callback) {
  let result = [];
  for (let item of array) {
    result.push(callback(item));
  }
  return result;
}
module.exports = map;
;
let assertArraysEqual = function(array1,array2) {
  if(array1.length !== array2.length) {
    console.log(`🛑🛑🛑Assertion Failed: ${array1} !== ${array2}`);
    return;
  } else {
    for(let i = 0; i < array1.length; i++) {
      if(array1[i] !== array2[i]) {
        console.log(`🛑🛑🛑Assertion Failed: ${array1} !== ${array2}`);
        return;
      }
    }
  }console.log(`✅✅✅Assertion Passed: ${array1} === ${array2}`);
}

const results1 = map(words, word => word[0]);
assertArraysEqual(results1,['g','c','t','m','t'])
const results2 = map(words, x => x.length);
assertArraysEqual(results2,[6,7,2,5,3]);
const results3 = map(words, x => x[x.length - 1])
assertArraysEqual(results3,['d','l','o','r','m'])