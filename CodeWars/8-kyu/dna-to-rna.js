// 25. Create a function which translates a given DNA string into RNA. For example: "GCAT"  =>  "GCAU"
// Note: .replace() to replace T with U
function DNAtoRNA(dna) {
    return dna.toUpperCase().replace(/T/g, 'U');
  }