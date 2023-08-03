// big - O = O(logn)

let sortedArr = [6, 7, 8, 9, 10, 11, 26, 33, 66, 80];

function recursiveBinarySearch(arr, t) {
  return search(arr, t, 0, arr.length - 1);
}

function search(arr, t, left, right) {
  if (left > right) {
    return -1;
  }
  let middle = Math.floor((left + right) / 2);
  if (t === arr[middle]) {
    return middle;
  }
  if (t < arr[middle]) {
    return search(arr, t, left, middle - 1);
  } else {
    return search(arr, t, middle + 1, right);
  }
}

console.log(recursiveBinarySearch(sortedArr, 11));
console.log(recursiveBinarySearch(sortedArr, 66));
