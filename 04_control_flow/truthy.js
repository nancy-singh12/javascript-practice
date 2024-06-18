const userEmail = "n@nancy.ai"

if (userEmail){
    console.log("Got user email");
}
else{
    console.log("don't have user email");
}

/*falsy values
 false, 0, -0, BigInt 0n, null, undefined, Nan */

/*trthy values 
"0", 'false', "", [], {}, function(){} */

// to check array is empty

if(userEmail.length === 0){
    console.log("Array is empty");
}

// to check object is empty

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("object is empty");
}

// Nullish Coalescing Operator (??) : works on null, undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20 

console.log(val1);

// nullish and terniary both are different operators
// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80"): console.log("more than 80");