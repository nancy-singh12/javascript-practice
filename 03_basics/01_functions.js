function addTwoNumbers(number1, number2) {
    return number1 + number2
}
const result = addTwoNumbers(3,4)
console.log("Result:", result);

function logInUserMessage(username){
    if(!username){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(logInUserMessage())

// function, when we donn't know the number of parameters
// in this case we will use rest operator
function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200, 400, 500, 2000));

// Making function using object
const user = {
    username: "Nancy",
    price: 199
}

function handleObject(myObject){
    console.log(`Username is ${myObject.username} and price is ${myObject.price}`);
}
handleObject(user)

// Making function using array

const myarr = [200,300,499,100]

function returnValue (myArray){
    return myArray[0]
}

console.log(returnValue(myarr));