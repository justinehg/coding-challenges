// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0). If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

function order(words){
    let arr = words.split(' ')
    let r = []
  
    arr.forEach(word=>{
      let x = word.split('')
      let num = x.find(el=>parseInt(el))
      r.push([word,parseInt(num)]) 
    })
  
    r.sort((a,b)=>a[1]-b[1]).map(x=> x.splice(1,1))
    return r.join(' ')
  }

//   OR

function order(words){
  
    return words.split(' ').sort(function(a, b){
        return a.match(/\d/) - b.match(/\d/);
     }).join(' ');
  }    
