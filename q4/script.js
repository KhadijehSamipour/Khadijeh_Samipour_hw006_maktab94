function aclean(arr) {
  let newArr = arr.map((val) => {
    return val.replace(/[^\w]/g).toLowerCase().split("").sort().join("");
  });
  console.log(newArr);
  var result = [];
  newArr.forEach((val, index) => {
    if (newArr.indexOf(val) === index) {
      result.push(arr[index]);
    }
  });
  return result;
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr));

alert(aclean(arr));
