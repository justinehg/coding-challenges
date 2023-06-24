// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.
function sumDigits(number) {
    let arr = Math.abs(number).toString().split('')
    let sum = 0;
    
    for(let i = 0; i < arr.length; i++)
      sum += +arr[i]
    return sum;
  }
  

