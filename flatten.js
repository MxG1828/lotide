let flatten = function (list) {
  let output = [];

  for (let i = 0; i < list.length; i++) {
    if (Array.isArray(list[i])) {
      let subList = list[i];
      for (let k = 0; k < subList.length; k++) {
        output += subList[k];
      }
    } else {
      output += list[i];
    }
  }
  return output;
};
module.exports = flatten;
console.log(flatten([1, 2, [3, 4], 5, [6]]));
