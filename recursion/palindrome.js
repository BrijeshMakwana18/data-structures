//Palindrome
const palindrome = (n, sum = 0, reminder = 0) => {
  if (n > 0) {
    reminder = n % 10;
    sum = sum * 10 + reminder;
    return palindrome(parseInt(n / 10), sum, reminder);
  }
  return sum;
};

console.log("********** Palindrome Start *********");
console.log("Palindrome ", 2000 == palindrome(2000));
console.log("Palindrome ", 100001 == palindrome(100001));
console.log("********** Palindrome End *********\n\n");
