let assertEqual = require("../assertEqual");
let head = require("../head");

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");