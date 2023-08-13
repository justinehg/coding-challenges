// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item. Implement the function which takes an array containing the names of people that like an item.
function likes(names) {
    if(Array.isArray(names)){
     
     return names.length > 3 ? names.slice(0,2).join(', ') + ' and ' + (names.length - 2) +' others like this'
          : names.length === 3 ? names.slice(0,2).join(', ') + ' and ' + names[2] + ' like this'
          : names.length === 2 ? names.join(' and ') + ' like this'
          : names.length === 1 ? names[0] + ' likes this' : 'no one likes this'
    } else {
      throw 'params must be a array.'
    }
  }

// OR.
function likes(names) {
     return {
       0: 'no one likes this',
       1: `${names[0]} likes this`, 
       2: `${names[0]} and ${names[1]} like this`, 
       3: `${names[0]}, ${names[1]} and ${names[2]} like this`, 
       4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`, 
     }[Math.min(4, names.length)]
}
