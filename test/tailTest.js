const tail = require("../tail");
const assertArraysEqual = require("../assertArraysEqual");
assertArraysEqual(["Lighthouse", "Labs"], tail(["Hello", "Lighthouse", "Labs"]));
