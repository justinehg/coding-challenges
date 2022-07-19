// Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them. a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.
// Note: The four operators are "add", "subtract", "divide", "multiply".
function arithmetic(a, b, operator) {
    if (operator === 'add') return a + b;
    if (operator === 'subtract') return a - b;
    if (operator === 'multiply') return a * b;
    if (operator === 'divide') return a / b;
  }
// BETTER SOLUTION: 
function arithmetic(a, b, operator){
    switch(operator) {
      case 'add':
        return a + b;
      case 'subtract':
        return a - b;
      case 'multiply':
        return a * b;
      case 'divide':
        return a / b;
    }
  }
