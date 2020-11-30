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

let letterPositions = function (sentence) {
  let result = {};

  for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i];
    if (result[char]) {
      result[char].push(i);
    } else {
      result[char] = [i];
    }
  }
  return result;
};
module.exports = letterPositions;
//test
let result = letterPositions("hello");
assertArraysEqual(result.h, [0]);
assertArraysEqual(result.e, [1]);
assertArraysEqual(result.l, [2, 3]);
assertArraysEqual(result.o, [4]);
