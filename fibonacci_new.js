function Fibonacci(number) {
  let result = [0, 1];
  let fib = 0;
  for (let i = 2; i < number; i++) {
    if (number === 0 || number === 1) {
      return result;
    } else {
      fib = result[i - 1] + result[i - 2];
      result.push(fib);
    }
  }
  return result;
}

console.log(Fibonacci(8));
