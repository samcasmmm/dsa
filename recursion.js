// recursive fibonacci

function recursivelyFibonacci(n) {
  if (n < 2) {
    return n;
  }
  return recursivelyFibonacci(n - 1) + recursivelyFibonacci(n - 2);
}
// console.log(recursivelyFibonacci(1));
// console.log(recursivelyFibonacci(2));
console.log("Fibonacci of :", recursivelyFibonacci(5));

// recursive Factorial

function recursivelyFactorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * recursivelyFactorial(n - 1);
}

console.log("Factorial of :", recursivelyFactorial(4));
