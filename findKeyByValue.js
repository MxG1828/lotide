let assertEqual = function(actual,expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`)
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};


let findKeyByValue = function(obj,value) {
  for (let key in obj) {
    if (obj[key] === value) {
      return key;
    } 
    
    
  }return undefined;
}
module.exports = findKeyByValue;


const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

const object1 = {
  one:1,
  two:2,
  three:4,
  five:6
};
assertEqual(findKeyByValue(object1, 1), "one");
assertEqual(findKeyByValue(object1, 2), "two");
assertEqual(findKeyByValue(object1, 3), undefined);
assertEqual(findKeyByValue(object1, 4), "three");
assertEqual(findKeyByValue(object1, 5), undefined);
assertEqual(findKeyByValue(object1, 6), 'five');
