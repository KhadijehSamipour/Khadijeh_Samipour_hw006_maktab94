let map = new Map();
map.set("name", "John");
let keys = map.keys();
console.log(map);
console.log(keys);
// Error: keys.push is not a function
keys.push("more");
