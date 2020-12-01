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
