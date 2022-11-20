// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or 
function longest(s1, s2) {
    return (s1 + s2).split('').filter(onlyUnique).sort().join('')
  }
  
  function onlyUnique(value, index, self) { 
      return self.indexOf(value) === index;
  }
// OR: SHORTER SOLUTION
const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')
