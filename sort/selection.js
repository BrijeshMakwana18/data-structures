function SelectionSort(items) {
  let ans = items;
  for (let i = 0; i < items.length; i++) {
    let minIndex = i;
    for (let j = i; j < items.length; j++) {
      if (ans[j] < ans[minIndex]) {
        minIndex = j;
      }
    }

    let temp = ans[minIndex];
    ans[minIndex] = ans[i];
    ans[i] = temp;
  }
  return ans;
}

let one = [2, 1, 4, 92, 45, 90, 5];
let two = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

console.log(SelectionSort(one));
console.log(SelectionSort(two));
