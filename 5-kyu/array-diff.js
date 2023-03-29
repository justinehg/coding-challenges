// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
function arrayDiff(a, b) {
    return a.filter(val => !b.includes(val));
}