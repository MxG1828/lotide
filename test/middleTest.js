const middle = require("../middle");
const assertArrayEqual = require("../assertArraysEqual");

assertArrayEqual([], middle([1, 2]));
assertArrayEqual([], middle([1]));
assertArrayEqual([2], middle([1, 2, 3]));
assertArrayEqual([3], middle([1, 2, 3, 4, 5]));
assertArrayEqual([2, 3], middle([1, 2, 3, 4]));
assertArrayEqual([3, 4], middle([1, 2, 3, 4, 5, 6]));
