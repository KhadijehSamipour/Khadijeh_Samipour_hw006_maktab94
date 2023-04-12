function unique(arr) {
  return arr.filter((val, index) => {
    return arr.indexOf(val) === index;
  });
}

let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];
console.log(unique(values));
alert(unique(values));
