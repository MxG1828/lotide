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
