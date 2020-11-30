let assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};
let assertArraysEqual = function (array1, array2) {
  if (array1.length !== array2.length) {
    console.log(`🛑🛑🛑Assertion Failed: ${array1} !== ${array2}`);
    return;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        console.log(`🛑🛑🛑Assertion Failed: ${array1} !== ${array2}`);
        return;
      }
    }
  }
  console.log(`✅✅✅Assertion Passed: ${array1} === ${array2}`);
};

let without = function (array1, array2) {
  let output = [];
  for (let i = 0; i < array1.length; i++) {
    let check = array1[i];
    let index = array2.indexOf(check);
    if (index < 0) {
      output.push(array1[i]);
    }
  }
  console.log(output);
};
module.exports = without;

without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
