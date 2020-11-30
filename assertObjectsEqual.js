

let eqArrays = function(array1,array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
  } return true;
};

let assertObjectsEqual = function(object1,object2) {
  const inspect = require('util').inspect;
  let obj1Keys = Object.keys(object1);
  
  if (obj1Keys.length !== Object.keys(object2).length) {
    console.log(`🛑🛑🛑Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
    return false;
  } else {
    for (let i = 0; i < obj1Keys.length; i++) {
      if (!eqArrays(object1[obj1Keys[i]],object2[obj1Keys[i]])) {
        console.log(`🛑🛑🛑Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
        return false;
      }
      
    }
  }
  console.log(`✅✅✅Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  return true;
};
module.exports = assertObjectsEqual;
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2);