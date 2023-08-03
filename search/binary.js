let arrOfNum = [6, 8, 7, 80, 11, 66, 33, 9, 10, 26];

function binarySearch(arr, t) {
  let newArr = arr.sort((a, b) => a - b);
  console.log(newArr);
  let leftIndex = 0;
  let rightIndex = newArr.length - 1;
  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (t === newArr[middleIndex]) {
      return middleIndex;
    }
    if (t < newArr[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }
  return -1;
}

console.log(binarySearch(arrOfNum, 80));
