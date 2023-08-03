const powerTwo = (n) => {
  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
};

console.log(powerTwo(1));
console.log(powerTwo(2));
console.log(powerTwo(5));
