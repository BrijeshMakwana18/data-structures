// You are given an array items,
// where each items[i] = [typei, colori, namei]
// describes the type, color, and name of the ith item.
// You are also given a rule represented by two strings,
// ruleKey and ruleValue.

// The ith item is said to match the rule
// if one of the following is true:

// ruleKey == "type" and ruleValue == typei.
// ruleKey == "color" and ruleValue == colori.
// ruleKey == "name" and ruleValue == namei.
// Return the number of items that match the given rule.

/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
  let ans = 0;
  for (let i = 0; i < items.length; i++) {
    switch (ruleKey) {
      case "type":
        if (items[i][0] == ruleValue) {
          ans += 1;
        }
        break;
      case "color":
        if (items[i][1] == ruleValue) {
          ans += 1;
        }
        break;
      case "name":
        if (items[i][2] == ruleValue) {
          ans += 1;
        }
    }
  }
  return ans;
};
