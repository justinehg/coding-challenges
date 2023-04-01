function sumDigits(number) {
    let arr = Math.abs(number).toString().split('')
    let sum = 0;
    
    for(let i = 0; i < arr.length; i++)
      sum += +arr[i]
    return sum;
  }
  
  // MORE EFFICIENT SOLUTION.

sumDigits = number => Math.abs(number).toString().split('').reduce((s, e) => s + +e, 0);
