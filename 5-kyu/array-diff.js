// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
function arrayDiff(a, b) {
    return a.filter(val => !b.includes(val));
}

// DIFFERENT APPROACH.

function array_diff(a, b) {
    return a.filter(function(x) { return b.indexOf(x) == -1; });
  }