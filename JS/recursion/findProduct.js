/* Replace every array element with the product 
of every other element without using a division operator */

const findProduct = (n, ans = []) => {
  if (n.length === ans.length) return [n, ans];
  let temp = n.reduce(
    (prev, item, index) => (index == ans.length ? prev : item * prev),
    1
  );
  ans.push(temp);
  return findProduct(n, ans);
};

console.log("********** Find product Start *********");
console.log("Find product ", findProduct([1, 2, 3, 4, 5]));
console.log("Find product ", findProduct([5, 3, 4, 2, 6, 8]));
console.log("********** Find product End *********\n\n");
