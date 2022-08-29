// Maximum and minimum of an array using minimum number of comparisons

const minMax = (array) => {
  let min = array[0],
    max = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
    if (array[i] < min) {
      min = array[i];
    }
  }
  return [min, max];
};

let temp = [1, 2, 3, 5];
console.log("Min, Max ::", minMax(temp));
