// if

const temperature = 45
if (temperature === 40) {
    console.log('temperature is 40');
}
else {
    console.log('temperature is greater than 40');
}
console.log('code executed');

const score = 200
if (score > 100) {
    const power = "fly"
    console.log(`User power: ${power}`);
}

// short hand notation
const balance =  1000
if (balance > 500) console.log("test") //implicit block


// nesting

if (balance < 500){
    console.log("less than");
} 
else if (balance<750) {
    console.log("less than 750");
}
else if (balance<900) {
    console.log("less than 900");
}
else{
    console.log("less than 1200");
}

// one more example

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard) {
    console.log("allow to buy course");
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User logged in");
}