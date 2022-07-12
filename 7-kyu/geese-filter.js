// Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.
// Note: Filter out the string words that match with ones in geese
function gooseFilter (birds) {
    const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    
    return birds.filter((b) => !geese.includes(b))
  };
