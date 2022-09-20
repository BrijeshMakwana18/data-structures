// Given an array A[] and a number x,
// check for pair in A[] with sum as x (aka Two Sum)
// Input: arr[] = {0, -1, 2, -3, 1}
//         x= -2
// Output: Pair with a given sum -2 is (-3, 1)
//               Valid pair exists
// Explanation:  If we calculate the sum of the output,1 + (-3) = -2

// Input: arr[] = {1, -2, 1, 0, 5}
//        x = 0
// Output: No valid pair exists for 0

const keyPair = (arr = [], x) => {
  let sortedArray = arr.sort((a, b) => a - b);
  let ans = [];
  let left = 0;
  let right = sortedArray.length - 1;
  while (left < right) {
    if (sortedArray[left] + sortedArray[right] == x) {
      ans.push(sortedArray[left]);
      ans.push(sortedArray[right]);
      return ans;
    } else if (sortedArray[left] + sortedArray[right] < x) {
      left++;
    } else {
      right--;
    }
  }
  return false;
};

let arrayOne = [0, -1, 2, -3, 1];
let x1 = -2;
let arrayTwo = [1, -2, 1, 0, 5];
let x2 = 0;
console.log("****Key Pair****", keyPair(arrayOne, x1));
console.log("****Key Pair****", keyPair(arrayTwo, x2));
