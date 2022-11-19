// Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
const deleteNth = (lst, N) => {
    const res = [];
    const countNums = {};
  
    lst.forEach((el, idx) => {
      countNums[el] = countNums[el] ? countNums[el] + 1 : 1;
      if(countNums[el] <= N) {
        res.push(el);
      }
    })
  
    return res;
  }
// OR
function deleteNth(arr,x) {
  var cache = {};
  return arr.filter(function(n) {
    cache[n] = (cache[n]||0) + 1;
    return cache[n] <= x;
  });
}
