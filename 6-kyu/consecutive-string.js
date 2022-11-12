// You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.
function longestConsec(strarr, k) {
    if (strarr.length == 0 || k > strarr.length || k <= 0) return '';
    
    let longStr = '';
    
    let newStr = '';
    
    for (let i = 0; i < strarr.length; i++){
      newStr = strarr.slice(i, i+k);
      if (newStr.join('').length > longStr.length ){
        longStr = newStr.join('');
      }
    }
    
    return longStr;
}
// MORE EFFICIENT
function longestConsec(strarr, k) {
    var longest = "";
    for(var i=0;k>0 && i<=strarr.length-k;i++){
      var tempArray = strarr.slice(i,i+k);
      var tempStr = tempArray.join("");
      if(tempStr.length > longest.length){
        longest = tempStr;
      }
    }
    return longest;
}
