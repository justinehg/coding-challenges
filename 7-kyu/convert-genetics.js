// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).
function DNAStrand(dna) {
    var letters = {'A': 'T', 'T': 'A', 'C': 'G', 'G': 'C'};
    var arr = [];
    for (var i=0; i < dna.length; i++) {
        arr[i] = letters[dna[i]];
    }
    return arr.join('');
}