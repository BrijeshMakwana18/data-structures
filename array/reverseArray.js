// Write a program to reverse an array or string

// Input  : arr[] = {1, 2, 3}
// Output : arr[] = {3, 2, 1}

const reverseArray = (array = []) => {
  let ans = [];
  for (let i = array.length - 1; i >= 0; i--) {
    ans.push(array[i]);
  }
  return ans;
};

let temp = [3, 34, 213, 54];
console.log("Reverse Array ::", reverseArray(temp));
