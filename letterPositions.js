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

const letterPositions = function(sentence) {
  let array = [];
  const results = {};
  for (let i = 0; i < sentence.length; i++){
    if (sentence[i] !== " ") {
      if (sentence[i] in results){
        results[sentence[i]].push(i);
      } else {
        array.push(i);
        results[sentence[i]] = array;
      }
    }
    array = [];
  }
  return results;
};

console.log(letterPositions("hello"));
assertArraysEqual(letterPositions("hello").e, [1]);