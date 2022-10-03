const skip = (str = "", char = "") => {
  if (!str) {
    return "";
  }
  if (str.startsWith(char)) {
    return skip(str.substring(char.length), char);
  }
  return str[0] + skip(str.substring(1), char);
};

console.log("****Skip Char****", skip("bappleccad", "apple"));
