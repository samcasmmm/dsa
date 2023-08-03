let arrOfNum = [6, 8, 7, 80, 11, 66, 33, 9, 10];

function linearSearch(arr, t) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === t) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch(arrOfNum, 11));
