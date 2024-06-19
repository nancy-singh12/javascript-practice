const myNumbers =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let newNums = myNumbers.map( (num) => num + 10)
console.log(newNums); //iterate on each object and perform operation on eaach element


// chaining using map
// in chaining the result comes from first operation pass to next

newNums = myNumbers
                 .map((num) => num * 10)
                 .map( (num) => num + 1)
                 .filter( (num) => num >= 40)

console.log(newNums);