const name = "nancy"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //string interpolation


// how to declare a string

const gameName = new String('Nancy-singh-com')

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('s'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-1, 4)
console.log(anotherString);

const newString1 = "   nancy   "
console.log(newString1.trim());

const url = "https://nancy.com/nancy%20singh"
console.log(url.replace('%20', '-'));

console.log(url.includes('nancy'));

console.log(gameName.split('-'));