// Return a string in which each character (case-sensitive) is repeated once.
function doubleChar(str){
    return str.split("").map(c => c + c).join("");
}
