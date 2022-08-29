// Given an array of integers nums, calculate the pivot index of this array.
// The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.
// If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.
// Return the leftmost pivot index. If no such index exists, return -1.
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let totalSum = nums.reduce((a, b) => a + b, 0);
  let leftSum = 0;
  let rightSum = 0;
  for (let i = 0; i < nums.length; i++) {
    rightSum = totalSum - leftSum - nums[i];
    if (leftSum == rightSum) {
      return i;
    }
    leftSum += nums[i];
  }
  return -1;
};
