// Given an array A[].
// Consisting of only 0s, 1s, and 2s.
// The task is to write a function that sorts the given array.
// The functions should put all 0s first, then all 1s and all 2s in last.

const sort = (arr) => {
  let countZero = 0;
  let countOne = 0;
  let countTwo = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    switch (arr[i]) {
      case 0:
        countZero++;
        break;
      case 1:
        countOne++;
        break;
      case 2:
        countTwo++;
        break;
    }
  }
  let zero = new Array(countZero).fill(0);
  let one = new Array(countOne).fill(1);
  let two = new Array(countTwo).fill(2);
  return zero.concat(one).concat(two);
};

let arr1 = [0, 1, 2, 0, 1, 2];
let arr2 = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1];

console.log("****Dutch National Flag****", sort(arr1));
console.log("****Dutch National Flag****", sort(arr2));
