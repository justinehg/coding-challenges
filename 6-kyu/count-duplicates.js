// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input 
function duplicateCount(text){
    return text.toLowerCase().split('').filter((val, i, arr) => {
        return !!(arr.indexOf(val) !== i && arr.lastIndexOf(val) === i);
      }).length;
    }
    
    
