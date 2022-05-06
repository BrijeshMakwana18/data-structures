//Fibonacci using recursive approach
let fiboSeries = [];
let first = 0;
let second = 1;
const recursiveFibo = (n) => {
  let fiboLength = fiboSeries.length;
  if (fiboLength - 1 === n) return fiboSeries;
  else if (fiboLength === 0) fiboSeries.push(first);
  else if (fiboLength === 1) fiboSeries.push(second);
  else {
    let temp = first + second;
    first = second;
    second = temp;
    fiboSeries.push(temp);
  }
  return recursiveFibo(n);
};

//Fibonacci using recursive two
const recursiveFiboTwo = (n) => {
  if (n === 0) return 0;
  if (n === 1 || n === 2) return 1;
  return recursiveFiboTwo(n - 1) + recursiveFiboTwo(n - 2);
};

console.log("********** Fibonacci Start *********");
console.log("Fibonacci Recursive approach ", recursiveFibo(10));
console.log("Fibonacci Recursive approach two", recursiveFiboTwo(10));
console.log("********** Fibonacci End *********\n\n");
