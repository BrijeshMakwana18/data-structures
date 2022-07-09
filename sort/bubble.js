function BubbleSort(items) {
  let ans = items;
  //Using isSorted flag to determine the array is sorted or not
  let isSorted = false;
  for (let i = 0; i < items.length; i++) {
    isSorted = true;
    for (let j = 0; j < items.length - 1; j++) {
      let first = ans[j];
      let second = ans[j + 1];
      if (first > second) {
        let temp = first;
        first = second;
        second = temp;
        ans[j] = first;
        ans[j + 1] = second;
        isSorted = false;
      }
      if (isSorted) {
        return ans;
      }
    }
  }
}

let one = [2, 1, 4, 92, 45, 90, 5];
let two = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

console.log(BubbleSort(one));
console.log(BubbleSort(two));
