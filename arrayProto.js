// polyfill

// map
let nums = [2, 6, 8, 74, 22];

console.log('Map PolyFill');
Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

let mulbythree = nums.myMap((num) => {
  return num * 3;
});

console.log(mulbythree);

// filter
console.log('Filter PolyFill');

Array.prototype.myFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) temp.push(this[i]);
  }
  return temp;
};

console.log(
  nums.myFilter((num) => {
    return num > 2;
  })
);

console.log('Filter Reduce');

Array.prototype.myReduce = function (cb, initial) {
  var accumulator = initial;
  for (let i = 0; i < this.length; i++) {
    accum = accum ? cb(accumulator, this[i], i, this) : this[i];
  }
  return accumulator;
};

console.log(
  nums.myReduce((acc, curr, i, arr) => {
    return acc > curr;
  })
);
