// object definition can be in 2 ways: literals and constructor 
//object literals or non-singleton object

const mySym = Symbol("key1")//declaring symbol

const jsuser = {
    name: "Nancy",
    age: 20,
    [mySym]: "myKey1",//correct syntax to use symbol as a key of an object
    location: "Jaipur",
    email: "nancy@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(jsuser.email);
console.log(jsuser["email"]);//correct way of accessing value
console.log(jsuser[mySym]);

jsuser.email = "nancy@chatgpt.com"
// Object.freeze(jsuser)//using freeze method so that no one can change the values
console.log(jsuser);

jsuser.greeting = function(){
    console.log("Hello js user");
}


jsuser.greetingTwo = function(){
    console.log(`Hello js user ${this.name}`); //this keyword is used to refer the current object
}

console.log(jsuser.greeting());
console.log(jsuser.greetingTwo());