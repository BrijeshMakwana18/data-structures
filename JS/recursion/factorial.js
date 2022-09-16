//Factorial
const factorial = (n) => {
  if (n === 1) return 1;
  return n * factorial(n - 1);
};

console.log("********** Factorial Start *********");
console.log("Factorial ", factorial(5));
console.log("Factorial ", factorial(10));
console.log("********** Factorial End *********\n\n");
