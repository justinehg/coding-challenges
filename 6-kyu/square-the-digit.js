// In this kata, you are asked to square every digit of a number and concatenate them.
function squareDigits(num){
    let newNum = new Array();
        ('' + num).split('').map(n => {
            newNum.push(n**2);
        })
    
    return parseInt(newNum.join(''));
}
// OR
function squareDigits(num){
    return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
    
  }
