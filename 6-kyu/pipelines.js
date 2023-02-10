// Given the a list of numbers, return a fixed list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).
// Notes: Pipes list is correct when each pipe after the first index is greater (+1) than the previous one, and that there is no duplicates.

function fixPipes(numbers) {
    let min = Math.min.apply(this, numbers);
    let max = Math.max.apply(this, numbers);
    let result = []

    for (let i = min; i <= max; i++) {
        result.push(i);
    }

    return result;
}

// OR

function pipeFix(numbers){
    let first = numbers[0];
    let last = numbers[numbers.length - 1];

    let arr = [];
    for (let i = first; i <= last; i++) {
        arr.push(i);
    }
    return arr;
}
