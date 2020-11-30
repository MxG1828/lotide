let assertEqual = function(actual,expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

let eqObjects = function(object1,object2) {
  let obj1Keys = Object.keys(object1);
  
  if (obj1Keys.length !== Object.keys(object2).length) {
    return false;
  } else {
    for (let i = 0; i < obj1Keys.length; i++) {
      if (!eqArrays(object1[obj1Keys[i]],object2[obj1Keys[i]])) {
        return false;
      }
      
    }
  }
  return true;
};
module.exports = eqObjects;

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc),true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2),false); // => false