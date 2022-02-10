const words = ["ground", "control", "to", "major", "tom"];

const eqArrays = function(arr1, arr2) {
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
  return false;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚫🚫🚫Assertion Failed: ${actual} !== ${expected}`);
  }
};

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, (word) => word[0]);
console.log(results1);

assertArraysEqual(map(words, (word) => word[0]), [ 'g', 'c', 't', 'm', 't' ]);

assertArraysEqual(map(words, (word) => word[2]), [ 'o', 'n', undefined, 'j', 'm']);

assertArraysEqual(map(words, (word) => word[90]), [ undefined, undefined, undefined, undefined, undefined ]);
