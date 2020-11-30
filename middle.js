let middle = function (array) {
  let output = [];
  if (array.length <= 2) {
    return output;
  }
  let mid = array.length / 2;
  if (Number.isInteger(mid)) {
    output.push(array[mid - 1], array[mid]);
  } else {
    output.push(array[Math.floor(mid)]);
  }
  return output;
};
module.exports = middle;
