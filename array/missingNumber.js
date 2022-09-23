// Given an array arr[] of size N-1
// with integers in the range of [1, N], the task is to find the missing number from the first N integers.

// Input: arr[] = {1, 2, 4, 6, 3, 7, 8}, N = 8
// Output: 5
// Explanation: The missing number between 1 to 8 is 5

// Input: arr[] = {1, 2, 3, 5}, N = 5
// Output: 4
// Explanation: Th

const missingNumber = (array, n) => {
  array = array.sort();
  for (let i = 0; i < n; i++) {
    if (i != n && array[i + 1] != array[i] + 1) {
      return array[i] + 1;
    }
  }
  return n;
};

let arr1 = [1, 2, 4, 6, 3, 7, 8];
let n1 = 9;

let arr2 = [1, 2, 3, 5];
let n2 = 5;

console.log("****Missing Number****", missingNumber(arr1, n1));
console.log("****Missing Number****", missingNumber(arr2, n2));
