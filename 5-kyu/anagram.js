// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
function isAnagram(s,t) {
    let str1 = s.split('').sort().join('');
    let str2 = t.split('').sort().join('');

    if (str1 === str2) {
        return true;
    } else {
        return false;
    }
}
