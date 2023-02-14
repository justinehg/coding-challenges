// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// Example: Input: s = "()[]{}" then Output: true

function isValid(s) {
    let bracket = {
        '(':')',
        '[':']',
        '{':"}"
    }
    let heap = [];

    for (let char of s) {
        if (bracket[char]) {
            heap.push(bracket[char]);
        }else {
            if (heap.pop() !== char) {
                return false;
            }
        }
    }
    return (!heap.length);
}