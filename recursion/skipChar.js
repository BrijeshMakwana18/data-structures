const skip = (str, char, i = 0) => {
  if (i === str.length - 1) {
    return str[i];
  }
  if (str[i] == char) {
    return skip(str, char, i + 1);
  }
  return str[i] + skip(str, char, i + 1);
};

console.log("****Skip Char****", skip("baccad", "a"));
