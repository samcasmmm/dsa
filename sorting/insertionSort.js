// Big-O = O(n^2)

let arrOfNum = [6, 8, 7, 80, 11, 66, 33, 9, 10];

function insertion(arr) {
  for (let i = 0; i < arr.length; i++) {
    let insert = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > insert) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = insert;
  }
  return arr;
}

console.log(insertion(arrOfNum));
