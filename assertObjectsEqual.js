const eqArray = require("./eqArrays");

let assertObjectsEqual = function (object1, object2) {
  const inspect = require("util").inspect;
  let obj1Keys = Object.keys(object1);

  if (obj1Keys.length !== Object.keys(object2).length) {
    console.log(`🛑🛑🛑Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
    return false;
  } else {
    for (let i = 0; i < obj1Keys.length; i++) {
      if (!eqArrays(object1[obj1Keys[i]], object2[obj1Keys[i]])) {
        console.log(`🛑🛑🛑Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
        return false;
      }
    }
  }
  console.log(`✅✅✅Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  return true;
};
module.exports = assertObjectsEqual;
