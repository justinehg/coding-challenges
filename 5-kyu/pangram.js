// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

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
//   OR

function isPangram(string){
    string = string.toLowerCase();
    return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
      return string.indexOf(x) !== -1;
    });
  }
