// Create a function which translates a given DNA string into RNA. For example: "GCAT"  =>  "

function DNAtoRNA(dna) {
    return dna.toUpperCase().replace(/T/g, 'U');
  }
