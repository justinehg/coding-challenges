// Create a function to return true if the two arguments given are anagrams of each other; return false 
String.prototype.sortLetters = function() {
    return this.toLowerCase().split('').sort().join('');
  }
  
  var isAnagram = function(test, original) {
    return test.sortLetters() == original.sortLetters();
  };
