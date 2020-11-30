let countLetters = function(string) {
  let output = {};
  let strNoSpace = string.split(' ').join('')
  for (let char of strNoSpace) {
    output[char] ? output[char] +=1 : output[char] = 1;
  } return output;
}
module.exports = countLetters;