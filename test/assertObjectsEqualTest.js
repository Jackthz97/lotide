const assertObjectsEqual = require('../assertObjectsEqual');

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const cd = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(ab, ba);
assertObjectsEqual(ab, cd);
assertObjectsEqual(ba, ab);