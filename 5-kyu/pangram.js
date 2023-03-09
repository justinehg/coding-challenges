// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
// Notes: A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

const isPangram = (string) => {
    let alpha = string.toUpperCase().split("");
    for (let beta = 65; beta < 91; beta++) {
      let gamma = String.fromCharCode(beta);
      if (alpha.includes(gamma)) {
        continue;
      } else {
        return false;
      }
    }
    return true;
  }
//   MORE EFFICIENT SOLUTION.

function isPangram(string){
    string = string.toLowerCase();
    return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
      return string.indexOf(x) !== -1;
    });
  }