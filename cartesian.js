// Big-O =  O(mn)

function cartesianProduct(arr1, arr2) {
  const result = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      result.push([arr1[i], arr2[j]]);
    }
  }

  return result;
}

const setA = [1, 2, 3];
const setB = ['a', 'b', 'c'];

const product = cartesianProduct(setA, setB);
console.log(product);
