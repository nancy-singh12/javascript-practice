// some special loops for  array
// for of

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
   console.log(`Each char is ${greet}`); 
}

// Maps: it is also in a key-value pairs but the mainn difference between map and object is:
// Map stores the keys in order and avoid duplicacy while object is only key-value pair without order
// Map is iterable whereas object id uniterable
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// console.log(map);

for (const [key, value] of map) {
    console.log(key, ":-", value);
}

