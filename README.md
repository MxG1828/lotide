# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @mxg1828/lotide`

**Require it:**

`const _ = require('@mxg1828/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(assertArraysEqual)`: compare 2 arrays, print a message of if identical or not
* `function2(assertEqual)`: compare 2 value, print a message of if identical or not
* `function3(assertObjectsEqual)`: compare 2 objects, print a message of if identical or not
* `function4(countLetters)`: how many time each letter occur
* `function5(countLetters)`: hou many time 'these' letter occur
* `function6(eqArrays)`: if 2 arrays are identical return ture, else return false
* `function7(eqObjects)`: if 2 objects are identical return ture, else return false
* `function8(findKey)`: list key of object
* `function9(findKeyByValue)`: return the key of given object
* `function10(flatten)`: open one layer of a nested array
* `function11(head)`: return fisrt element
* `function12(letterPositions)`: return a list of index of each letter in a sentence
* `function13(map)`: exexute a callback function on a array
* `function14(middle)`: return the middle one or two element of an array
* `function15(tail)`: return a array without it's first element
* `function16(takeUntil)`: return every element of the array untill callback function return ture
* `function17(without)`: return elements in the first array that the second array doesn't have

