// 1313. Decompress Run-Length Encoded List

// We are given a list nums of integers representing a list compressed with run-length encoding.
// Consider each adjacent pair of elements [freq, val] = [nums[2*i], nums[2*i+1]] (with i >= 0).  For each such pair, there are freq elements with value val concatenated in a sublist. Concatenate all the sublists from left to right to generate the decompressed list.
// Return the decompressed list.

var decompressRLElist = function (nums) {
  if (nums.length % 2 == 0) {
    let ans = [];
    for (let i = 0; i < nums.length - 1; i = i + 2) {
      let freq = nums[i];
      let val = nums[i + 1];
      let temp = new Array(freq).fill(val);
      ans = ans.concat(temp);
    }
    return ans;
  }
  return "Invalid array";
};

let temp = [1, 2, 3, 4];

console.log("List ", decompressRLElist(temp));
