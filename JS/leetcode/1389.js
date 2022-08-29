// Given two arrays of integers nums and index. Your task is to create target array under the following rules:

// Initially target array is empty.
// From left to right read nums[i] and index[i], insert at index index[i] the value nums[i] in target array.
// Repeat the previous step until there are no elements to read in nums and index.
// Return the target array.

// It is guaranteed that the insertion operations will be valid.

var createTargetArray = function (nums, index) {
  let targetArray = [];
  for (let i = 0; i < index.length; i++) {
    let tempIndex = index[i];
    if (targetArray[tempIndex] !== undefined) {
      targetArray.splice(tempIndex, 0, nums[i]);
    } else {
      targetArray.push(nums[i]);
    }
  }
  return targetArray;
};
