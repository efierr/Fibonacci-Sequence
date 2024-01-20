
// we first define a function and we will call it Fibonacci and we are passing a parameter of n to signify the nth number of the fibonacci sequence
function fibonacci(n) {
    // we next create a constant array with the first two numbers of the fibonacci sequence.
    const fibonacciArray = [0, 1];

    // we next create a for loop to be able to iterate over n to be able to populate the array with the next number of the sequence at index 2.
    for (let i = 2; i < n; i++) {
        // we now populate index i to the sum of the previous numbers of the array which will create our sequence.
        fibonacciArray[i] = fibonacciArray[i-1] + fibonacciArray[i-2]
    }
    // we lastly return the array with the new elements.
    return fibonacciArray;
}
console.log(fibonacci(3));
console.log(fibonacci(7));
console.log(fibonacci(10));
console.log(fibonacci(11));