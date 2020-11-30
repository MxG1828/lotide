const tail = require("../tail");
const assert = require("chai").assert;
describe("Tail", () => {
  it('return ["Lighthouse", "Labs"] when given ["Hello", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(["Lighthouse", "Labs"], tail(["Hello", "Lighthouse", "Labs"]));
  });
});
