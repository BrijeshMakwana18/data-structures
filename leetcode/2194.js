// Cells in a Range on an Excel Sheet
// Input: s = "K1:L2"
// Output: ["K1","K2","L1","L2"]
// Explanation:
// The above diagram shows the cells which should be present in the list.
// The red arrows denote the order in which the cells should be presented.

/**
 * @param {string} s
 * @return {string[]}
 */
var cellsInRange = function (s) {
  let array = s.split(":");
  let start = array[0].charCodeAt(0);
  let end = array[1].charCodeAt(0);
  let ans = [];
  for (let i = start; i < end + 1; i++) {
    for (let j = s[1]; j <= s[4]; j++) {
      ans.push(String.fromCharCode(i) + j);
    }
  }

  return ans;
};
