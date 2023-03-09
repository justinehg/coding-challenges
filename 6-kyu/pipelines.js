// Given the a list of numbers, return a fixed list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).
function fixPipes(numbers) {
    let min = Math.min.apply(this, numbers);
    let max = Math.max.apply(this, numbers);
    let result = []

    for (let i = min; i <= max; i++) {
        result.push(i);
    }

    return result;
}

