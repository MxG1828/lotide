const assert = require("chai").assert;
const middle = require("../middle");

describe("middle", () => {
  it("return [] when given [1,2]", () => {
    assert.deepEqual([], middle([1, 2]));
  });
  it("return [] when given [1]", () => {
    assert.deepEqual([], middle([1]));
  });
  it("return [2] when given [1,2,3]", () => {
    assert.deepEqual([2], middle([1, 2, 3]));
  });
  it("return [3] when given [1,2,3,4,5]", () => {
    assert.deepEqual([3], middle([1, 2, 3, 4, 5]));
  });
  it("return [2,3] when given [1,2,3,4]", () => {
    assert.deepEqual([2, 3], middle([1, 2, 3, 4]));
  });
  it("return [3,4] when given [1,2,3,4,5,6]", () => {
    assert.deepEqual([3, 4], middle([1, 2, 3, 4, 5, 6]));
  });
});
