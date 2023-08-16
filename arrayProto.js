// polyfill

// map
let nums = [2, 6, 8, 74, 22];

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
