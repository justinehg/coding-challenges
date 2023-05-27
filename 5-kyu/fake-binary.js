// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
function fakeBin(x) {
    const arr = x.split('');
    let newStr = [];
    for (let i = 0; i < arr.length; i++) {
      Number(arr[i]) < 5 ? newStr.push(0) : newStr.push(1);
    }
}

// BETTER APPROACH

function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}