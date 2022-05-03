//Fibonacci using normal approach
const NormalFibo = (n) => {
  let a = 0; //First value of the series
  let b = 1; //Second value of the series
  let ans = []; //Fibo array

  //Looping till the n
  for (let i = 1; i < n; i++) {
    if (i === 1) ans.push(a);
    if (i === 2) ans.push(b);
    else {
      let temp = a + b; //Sum of two previous elements
      a = b; // Swapping previous values with the new answer
      b = temp;
      ans.push(temp);
    }
  }
  return ans;
};

//Fibonacci using recursive approach
let fiboSeries = [];
let first = 0;
let second = 1;
const RecursiveFibo = (n) => {
  let fiboLength = fiboSeries.length;
  if (fiboLength === n) return fiboSeries;
  else if (fiboLength === 0) fiboSeries.push(first);
  else if (fiboLength === 1) fiboSeries.push(second);
  else {
    let temp = first + second;
    first = second;
    second = temp;
    fiboSeries.push(temp);
  }
  return RecursiveFibo(n);
};

//Fibonacci using recursive two
const RecursiveFiboTwo = (n) => {
  if (n === 0) return 0;
  if (n === 1 || n === 2) return 1;
  return RecursiveFiboTwo(n - 1) + RecursiveFiboTwo(n - 2);
};

console.log("Fibonacci Normal approach ", NormalFibo(10));
console.log("Fibonacci Recursive approach ", RecursiveFibo(10));
console.log("Fibonacci Recursive approach two", RecursiveFiboTwo(10));

//Factorial
const Factorial = (n) => {
  if (n === 0 || n === 1) return 1;
  return n * Factorial(n - 1);
};

console.log("Factorial ", Factorial(5));
