// array

const arr1 = [2,4,6,78,9,1]
const myHeroes = ["shaktimaan", "naagraj", "spiderman"]

const myarr = new Array(1,3,4,5)
console.log(myarr[0]);

// array methods

arr1.push(10)
arr1.push(20)
arr1.pop()
arr1.unshift(12)
arr1.shift()
console.log(arr1);
console.log(arr1.includes(9));
console.log(arr1.indexOf(9));

const newArr = arr1.join()
console.log(newArr);

//slice, splice

console.log("A ", arr1);

const myn1 = arr1.slice(1,3)
console.log(myn1);

console.log("B ", arr1);

const myn2 = arr1.splice(1,3)
console.log(myn2)

console.log("c ", arr1);