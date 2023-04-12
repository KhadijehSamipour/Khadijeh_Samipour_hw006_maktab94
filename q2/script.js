const num = prompt("enter numbet of array");
const arrOne = prompt("enter an array");
let array = arrOne.split(",").map(Number);

for (let i = 0; i < num - 1; i++) {
  let arrTwo = prompt("enter an array");
  let arrThree = arrTwo.split(",").map(Number);
  array = arrThree.concat(array);
}

const result = array.sort(function (arr1, arr2) {
  return arr2 - arr1;
});

console.log(result);
