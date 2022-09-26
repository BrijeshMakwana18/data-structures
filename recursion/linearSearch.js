//Linear search multiple occurrences

// const linearSearch = (arr, element, index = 0, multiple = []) => {
//   if (index == arr.length) {
//     return multiple.length > 0 ? multiple : false;
//   } else if (arr[index] == element) {
//     multiple.push(index);
//   }
//   return linearSearch(arr, element, index + 1, multiple);
// };

const linearSearch = (arr, element, index = 0) => {
  let multiple = [];
  if (arr[index] == element) {
    multiple.push(index);
  }
  if (index == arr.length - 1) {
    return multiple;
  }
  let ansFromChild = linearSearch(arr, element, index + 1);
  multiple = multiple.concat(ansFromChild);
  return multiple;
};

let arr = [1, 2, 3, 1, 4, 14, 50, 26, 2, 1, 4, 2];

// console.log("****Linear Search****", linearSearch(arr, 1));
// console.log("****Linear Search****", linearSearch(arr, 4));
// console.log("****Linear Search****", linearSearch(arr, 50));
console.log("****Linear Search****", linearSearch(arr, 2));
