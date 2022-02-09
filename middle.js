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
  console.log(actual, expected);
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚫🚫🚫Assertion Failed: ${actual} !== ${expected}`);
  }
};

const middle = function(array) {
  const arrMiddle = [];
  let midPoint = array.length / 2;
  if (array.length % 2 === 0 && array.length > 2) {
    for (let i = midPoint - 1; i < midPoint + 1; i++){
      arrMiddle.push(array[i]);
    }
    return arrMiddle;
  }
  else if (array.length % 2 !== 0 && array.length > 2){
    arrMiddle.push(array[Math.floor(midPoint)]);
    return arrMiddle;
  }
  else {
    return arrMiddle;
  }
};

console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]

assertArraysEqual(middle([1, 2]), [3]);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);