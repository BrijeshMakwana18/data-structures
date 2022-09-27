// Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.
// Input: s = "Hello"
// Output: "hello"

/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function (s) {
  let ans = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i].charCodeAt(0) >= 65 && s[i].charCodeAt(0) <= 90) {
      ans += String.fromCharCode(s[i].charCodeAt(0) + 32);
    } else {
      ans += s[i];
    }
  }
  return ans;
};
