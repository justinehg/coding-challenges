// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.
function sumDigits(number) {
    let arr = Math.abs(number).toString().split('')
    let sum = 0;
    
    for(let i = 0; i < arr.length; i++)
      sum += +arr[i]
    return sum;
  }
  
// OR
sumDigits = number => Math.abs(number).toString().split('').reduce((s, e) => s + +e, 0);

// OR

function sumDigits(number) {
    return Math.abs(number).toString().split('').reduce(function(a,b){return +a + +b}, 0);
  }
