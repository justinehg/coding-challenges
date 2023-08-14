var interactive = {};
interactive.interview = {};

interactive.interview.ExpressionParser = (function () {
  var ExpressionParser = function () {};

  ExpressionParser.prototype.parse = function (expression) {
    const stack = [];
    const tokens = expression.split(/\s+/);

    // Helper function to perform binary operations
    function doBinaryOperation(operator) {
      const op2 = stack.pop();
      const op1 = stack.pop();
      switch (operator) {
        case '+':
          stack.push(op1 + op2);
          break;
        case '-':
          stack.push(op1 - op2);
          break;
        case '*':
          stack.push(op1 * op2);
          break;
        case '/':
          stack.push(op1 / op2);
          break;
        case '%':
          stack.push(op1 % op2);
          break;
        case '&':
          stack.push(op1 & op2);
          break;
        case '|':
          stack.push(op1 | op2);
          break;
        case '^':
          stack.push(op1 ^ op2);
          break;
        case '~':
          stack.push(~op2);
          break;
        default:
          throw new Error('Invalid operator: ' + operator);
      }
    }

    for (const token of tokens) {
      if (!isNaN(token)) {
        // If the token is a number (operand), push it into the stack
        stack.push(parseInt(token, 10));
      } else if (/^~$|^\+|-|\*|\/|%|&|\||\^$/.test(token)) {
        // If the token is a valid binary operator, perform the operation
        doBinaryOperation(token);
      } else {
        // Invalid token, throw an error
        throw new Error('Invalid token: ' + token);
      }
    }

    if (stack.length !== 1) {
      // The stack should have only one element, throw an error otherwise
      throw new Error('Invalid expression: ' + expression);
    }

    // Return the final result
    return stack.pop();
  };

  return ExpressionParser;
})();
