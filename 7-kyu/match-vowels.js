// Return the number (count) of vowels in the given string. We will consider a, e, i, o, u as vowels for this Kata (but not y). The input string will only consist of lower case letters and/or spaces.
function getCount(str) {
    let vowelsCount = 0
    const vowels = ["a", "e", "i", "o", "u"]
    for(let char of str) {
        if(vowels.includes(char)) {
            vowelsCount++
        }
    }
  
    return vowelsCount;
  }

// MORE EFFICIENT SOLUTION
function getCount(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
