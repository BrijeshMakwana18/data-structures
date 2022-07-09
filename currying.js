const sum = (a) => {
  return (innerSum = (b) => {
    if (b) {
      return sum(a + b);
    }
    return a;
  });
};

let ans = sum(1)(2)(3)();

console.log(ans);
