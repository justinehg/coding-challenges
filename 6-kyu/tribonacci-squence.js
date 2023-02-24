// Create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.
function tribonacci(signature,n) {
    var trib = signature;
    for (i = 3; i < n; i++) {
      trib.push((trib[i-1] + trib[i-2] + trib[i-3]));
    }
    return trib.slice(0, n);
  }
