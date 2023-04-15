// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

function descendingOrder(n){
    var digits = (""+n).split("").sort(function(a, b){return b-a});
    digits = digits.join("");
    return Number(digits);
  }

// .MORE EFFICIENT SOLUTION

function descendingOrder(n){
    return parseInt(String(n).split('').sort().reverse().join(''))
  }