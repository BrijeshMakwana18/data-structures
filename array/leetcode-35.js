/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  return calculate(nums, target, 0, nums.length - 1);
};

function calculate(nums, target, start, end) {
  const mid = Math.floor((start + end) / 2);
  if (start > end) {
    return start;
  }
  if (nums[mid] === target) {
    return mid;
  } else if (target < nums[mid]) {
    return calculate(nums, target, start, mid - 1);
  } else if (target > nums[mid]) {
    return calculate(nums, target, mid + 1, end);
  }
}
