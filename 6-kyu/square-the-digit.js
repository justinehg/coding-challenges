// In this kata, you are asked to square every digit of a number and concatenate them.

function squareDigits(num){
    return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
    
  }
