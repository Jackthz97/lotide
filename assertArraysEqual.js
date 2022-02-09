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

const assertArraysEqual = function(arr1, arr2) {
  return eqArrays(arr1, arr2);
};


console.log(`Are the two array list equal? ${assertArraysEqual([1, 2, 3], [1, 2, 3])}`); // => true

console.log(`Are the two array list equal? ${assertArraysEqual([1, 2, 3], [3, 2, 1])}`); // => false

console.log(`Are the two array list equal? ${assertArraysEqual(["1", "2", "3"], ["1", "2", "3"])}`); // => true
console.log(`Are the two array list equal? ${assertArraysEqual(["1", "2", "3"], ["1", "2", 3])}`); // => false

console.log(`Are the two array list equal? ${assertArraysEqual(["1", "2"], ["1", "2", "3"])}`); // => false
console.log(`Are the two array list equal? ${assertArraysEqual(["1", "2", "3"], ["2", "3"])}`); // => false