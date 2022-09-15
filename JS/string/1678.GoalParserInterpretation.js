// You own a Goal Parser that can interpret a string command. The command consists of an alphabet of "G", "()" and/or "(al)" in some order. The Goal Parser will interpret "G" as the string "G", "()" as the string "o", and "(al)" as the string "al". The interpreted strings are then concatenated in the original order.
// Given the string command, return the Goal Parser's interpretation of command.

// Example 1:

// Input: command = "G()(al)"
// Output: "Goal"
// Explanation: The Goal Parser interprets the command as follows:
// G -> G
// () -> o
// (al) -> al
// The final concatenated result is "Goal".

/**
 * @param {string} command
 * @return {string}
 */

var interpret = function (command) {
  let stringArray = command.split("");
  let ans = [];
  let i = 0;
  while (i < stringArray.length) {
    if (stringArray[i] == "G") {
      i += 1;
      ans.push("G");
    } else if (stringArray[i] == "(" && stringArray[i + 1] == ")") {
      i += 2;
      ans.push("o");
    } else if (stringArray[i] == "(" && stringArray[i + 1] == "a") {
      i += 4;
      ans.push("al");
    }
  }
  return ans.join("");
};

//Method 2
const interpret = (command) =>
  command.split("()").join("o").split("(al)").join("al");
