// In this kata you are required to, given a string, replace every letter with its position in the alphabet.
function alphabetPosition(text) {
    let str = text.toLowerCase();
    let a = "";
  
    for (let i = 0; i < str.length; i++) {
  
        if (str.charCodeAt(i) - 96 > 0 && str.charCodeAt(i) - 96 <= 26) {
          a+= str.charCodeAt(i) - 96 + ' ';
        }
      }
      return a.trim();
    }
// .OR
function alphabetPosition(text) {
    var result = "";
    for (var i = 0; i < text.length; i++){
      var code = text.toUpperCase().charCodeAt(i)
      if (code > 64 && code < 91) result += (code - 64) + " ";
    }
  
    return result.slice(0, result.length-1);
  }