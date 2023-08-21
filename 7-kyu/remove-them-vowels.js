// Create a function that takes a string and return a new string with all vowels removed. For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '');
  }
