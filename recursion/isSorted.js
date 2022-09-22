//Check if the array is sorted

const isSorted = (arr, index = 0) => {
  if (index == arr.length - 1) {
    return true;
  }
  return arr[index] < arr[index + 1] && isSorted(arr, index + 1);
};

let arr1 = [1, 2, 4, 5, 6, 7, 8];
let arr2 = [2, 4, 5, 6, 7, 8, 1];
let arr3 = [1, 2, 4, 10, 6, 7, 8];
let arr4 = [10, 2, 4, 5, 6, 7, 8];

console.log("****Is Sorted****", isSorted(arr1));
console.log("****Is Sorted****", isSorted(arr2));
console.log("****Is Sorted****", isSorted(arr3));
console.log("****Is Sorted****", isSorted(arr4));
