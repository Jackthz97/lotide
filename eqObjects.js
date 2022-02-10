const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
    // console.log("✅✅✅Assertion Passed: " + actual + " === " + expected);
  } else {
    // console.log("🚫🚫🚫Assertion Failed: " + actual + " !== " + expected);
    console.log(`🚫🚫🚫Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

// ab["a"] === ba["a"]
// ab["b"] === ba["b"]

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false
assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false