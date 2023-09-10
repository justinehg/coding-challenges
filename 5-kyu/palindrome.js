// Given a string, return true if it is a palindrome, or false otherwise.
function isPalindrome(s) {
    let re = /[\W_]/g;
    let lowRegStr = s.toLowerCase().replace(re, '');
    let reverseStr = lowRegStr.split('').reverse().join('');
    return reverseStr === lowRegStr;
}
