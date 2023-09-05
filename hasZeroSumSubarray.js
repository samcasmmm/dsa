function hasZeroSumSubarray(nums) {
  const sumSet = new Set();
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    // If the current sum is zero or has been seen before, there is a zero-sum subarray
    if (sum === 0 || sumSet.has(sum)) {
      return true;
    }

    // Add the current sum to the set
    sumSet.add(sum);
  }

  // If no zero-sum subarray is found
  return false;
}

// Example usage:
const inputArray = [3, 4, -7, 3, 1, 3, 1, -4, -2, -2];
const hasZeroSum = hasZeroSumSubarray(inputArray);
if (hasZeroSum) {
  console.log('Subarray with zero-sum exists');
} else {
  console.log('Subarray with zero-sum does not exist');
}
