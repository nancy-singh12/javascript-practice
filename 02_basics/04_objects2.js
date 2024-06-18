// singleton or object constructor
// how to declare singleton object

const tinderUser = new Object()

tinderUser.id = "1223abc"
tinderUser.name = "Harri"
tinderUser.isLoggedIn = false

console.log(tinderUser);

// objects inn objects

const regularUser = {
    email : "someone@gmail.com",
    fullname: {
        userfullname:{
            firstname : "Nancy",
            lastname : "Singh"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);

// merging the objects
const obj1 = {1:"a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

const obj3 = Object.assign({}, obj1, obj2) //one of the method to spread objects
console.log(obj3);

const obj4 = {...obj1, ...obj2}
console.log(obj4);

// Accessing the objects from database
// the data come in the form of array of objects

const users = [
    {
        id: 1,
        email: "n@gmail.com"
    },
    {
        id: 2,
        email: "n@gmail.com"
    },
    {
        id: 3,
        email: "n@gmail.com"
    },
]
console.log(users[1].id);

console.log(Object.keys(tinderUser));//we will get the array of keys in tinderuser
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));//we will get the arrays if keys and values

console.log(tinderUser.hasOwnProperty('isLoggedIn'));//to check the property is present or not

// object destructuring

const course = {
    coursename : "javascript",
    price: 999,
    courseInstructor: "youtube"  
}

const {cousreInstructor: instructor}  = course

console.log(instructor);