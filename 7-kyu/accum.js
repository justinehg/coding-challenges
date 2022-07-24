// This time no story, no theory. The examples below show you how to write function accum. The parameter of accum is a string which includes only letters from a..z and A..Z.
function accum(s) {
    return [...s].map((char, index) => (char.toUpperCase() + char.toLowerCase().repeat(index))).join("-")
  } 