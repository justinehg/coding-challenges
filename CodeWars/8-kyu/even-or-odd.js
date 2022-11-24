// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
function evenOrOdd(numbers){
    if(number % 2 == 0){
        return "Even";
    }else{
        return "Odd";
    }
}

// OR
function evenOrOdd(numbers){
    return numbers % 2 ? "Even" : "Odd";
}
