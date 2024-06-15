console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

/* equality check == and comparisons > < >= <= work differently.
comparisons covert null to a number, treationg is as 0.
that's why (3) null >= 0 is true and > 0 is false.
*/

// strict check (===)
/* It checks values as well as their datatypes */
console.log("2" === 2);