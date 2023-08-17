const Fibonacci = (num) => {
  let arr = [0, 1];
  let f = 0;
  let total = 0;
  for (let i = 2; i < num; i++) {
    if (num === 0 || num === 1) {
      return num;
    } else {
      f = arr[i - 1] + arr[i - 2];
      arr.push(f);
    }
  }
  return total, arr;
};
console.log(Fibonacci(7));

const fib2 = (n) => {
  const f = [0, 1];
  for (let i = 2; i < n; i++) {
    f[i] = f[i - 1] + f[i - 2];
  }
  return f;
};
console.log(fib2(8));
