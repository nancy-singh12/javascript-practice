// i) Primitive
/*
 call by value, means original data doesn't change
7 types : String, number, Boolean, null, undefined, symbol, BigInt
*/

const id =  Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

const bigNumber = 37288686379298n
console.log(typeof bigNumber);

// ii) Reference type(Non-primitive)
/*
arrays, objects, functions
*/

const heroes = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "nancy",
    age: 20,
}

const myfunction = function(){
    console.log("Hello world");
}