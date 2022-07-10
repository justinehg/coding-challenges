// 32. Write a function to convert a name into initials. This kata strictly takes two words with one space in between them. The output should be two capital letters with a dot separating them. It should look like this: Sam Harris => S.H.
function abbrevName(name){
    return name.split(" ").map(initial => initial[0].toUpperCase()).join(".")
  }