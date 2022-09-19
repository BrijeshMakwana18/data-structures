// Given an integer array nums of unique elements, return all possible subsets (the power set).
// The solution set must not contain duplicate subsets. Return the solution in any order.

// Example 1:
// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let output = [];
  let ans = [];
  let index = 0;
  function resolve(input, output, index, ans) {
    //Base
    if (index === input.length) {
      ans.push(output);
      console.log("return ", index);
      return;
    }

    let op1 = [...output];
    let op2 = [...output];
    console.log("Before ", index);
    //Exclude
    resolve(input, op1, index + 1, ans);

    //Include
    console.log("After ", index);
    op2.push(input[index]);
    resolve(input, op2, index + 1, ans);
  }
  resolve(nums, output, index, ans);
  return ans;
};

let temp = [1, 2, 3];
console.log("Subset ", temp, subsets(temp));
