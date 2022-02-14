
const eqArrays = function(actual, expected) {
  if (actual.length === expected.length) {
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        return false;
      }
    }
    return true;
  }
  return false;
};

const eqObjects = function(object1, object2) {
  let keyList1 = Object.keys(object1);
  let keyList2 = Object.keys(object2);
  if (keyList1.length !== keyList2.length) {
    return false;
  }
  for (let i = 0; i < keyList1.length; i++) {
    if (!(keyList1[i] in object2)) {
      return false;
    }
    if ((Array.isArray(object1[keyList1[i]]))) {
      if (!(eqArrays(object1[keyList1[i]], object2[keyList1[i]]))) {
        return false;
      }
    } else if (object1[keyList1[i]] !== object2[keyList1[i]]) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  console.log(`Example label: ${inspect(actual)}`);
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🚫🚫🚫Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const cd = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(ab, ba);
assertObjectsEqual(ab, cd);
assertObjectsEqual(ba, ab);
