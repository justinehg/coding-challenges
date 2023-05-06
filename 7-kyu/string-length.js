// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
function solution(str, ending){
    return str.indexOf(ending, str.length - ending.length) !== -1;
  }

