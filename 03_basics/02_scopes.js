// we do not use 'var' because it does not follow thhe concept of local or global scope
// the scope we use in our code and scope we use in browser's console are two different things

let a = 300 //variable that can be accessed globally
if(true){ //local or block scope
    let a = 10
    const b = 200
    console.log("Inner: ", a);
}
console.log(a);

// nested scope

function one (){
    const username = "Nancy"

    function two(){
        const website = "youtube"  
        console.log(username);
    }
    // console.log(website); this line can't be executed because website is local variable
    two()
}
one()

if(true){
    const username = "nancy"
    if (username === "nancy"){
        const website = " youtube"
        console.log(username + website);
    } 
    // console.log(website);
}
// console.log(username);

/* **********************Intresting********************** */
console.log(addOne(5)); // when we call the function before its declaration that is known as function hoisting
function addOne(num){
    return num + 1
}
// addTwo(5) here the hoisting is not possible bcoz we are storing the function in variable
const addTwo = function (num){ // when we use a variable to store a function that is known as expression
    return num + 2
}