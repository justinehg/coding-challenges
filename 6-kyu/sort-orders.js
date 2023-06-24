// Sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
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

    
