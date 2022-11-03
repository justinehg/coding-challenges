// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers. Return your answer as a number.
// Note: .reduce() is to return the sum of all the elements in an array
function sumMix(x){
    return x.reduce((x, y) => Number(x) + Number(y), 0);
  }
