let assertEqual = function(actual,expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`)
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

let countLetters = function(string) {
  let output = {};
  let strNoSpace = string.split(' ').join('')
  for (let char of strNoSpace) {
    output[char] ? output[char] +=1 : output[char] = 1;
  } return output;
}
console.log(countLetters('Lighthouse in the house'))