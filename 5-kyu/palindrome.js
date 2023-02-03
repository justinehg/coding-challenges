// Given a string s, return true if it is a palindrome, or false otherwise.
// Note: A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

function isPalindrome(s) {
    let re = /[\W_]/g;
    let lowRegStr = s.toLowerCase().replace(re, '');
    let reverseStr = lowRegStr.split('').reverse().join('');
    return reverseStr === lowRegStr;
}