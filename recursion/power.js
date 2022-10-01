const power = (n, i) => {
  if (i === 0) {
    return 1;
  }
  return n * power(n, i - 1);
};

console.log("****Power 2^4***", power(2, 4));
