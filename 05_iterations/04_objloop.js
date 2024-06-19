const myObj = {
    js: "javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple"
}

// forin loop can be used for object 

for (const key in myObj) {
    console.log(key); //for keys
    console.log(`${key} shortcut is for ${myObj[key]}`)
}

// forin for array
const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(key); // print index values
    console.log(programming[key]); // to print values
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const keys in map) {
    console.log(keys);
}