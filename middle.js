const middle = function(array) {
  let midPoint = array.length / 2;
  if (array.length > 2) {
    if (array.length % 2 === 0) {
      return ([array[midPoint - 1], array[midPoint]]);
    } else {
      return [array[Math.floor(midPoint)]];
    }
  }
  return [];
};

module.exports = middle;