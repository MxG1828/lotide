const eqArrays = require("./eqArrays");

let eqObjects = function (object1, object2) {
  let obj1Keys = Object.keys(object1);

  if (obj1Keys.length !== Object.keys(object2).length) {
    return false;
  } else {
    for (let i = 0; i < obj1Keys.length; i++) {
      if (!eqArrays(object1[obj1Keys[i]], object2[obj1Keys[i]])) {
        return false;
      }
    }
  }
  return true;
};
module.exports = eqObjects;
