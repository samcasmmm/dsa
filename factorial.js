const factorial = (n) => {
  let num = 1;
  for (let i = 2; i <= n; i++) {
    if (n === 0 || n === 1) {
      return n;
    } else {
      num = num * i;
    }
  }
  return num;
};

console.log(factorial(5));
