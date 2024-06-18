// Information about this keyword

const user = {
    username: "Nancy",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the website`);
    }//this keyword is used to refer the current context/value in a block
}

// console.log(this);

//global obbject in browser is 'Window' that's why when we console this keyword in browser it returns window objects 
// when we print the this keyword in our code it returns empty object {} because there is no global object

function chai(){
    // console.log(this);
}//in function we can't fetch the values by this.key
chai()


/****************** Arrow function ***************************/
// () => {} (arrow function declaration)
const addTwo = (num1, num2) => {
    return  num1 + num2
}
console.log(addTwo(4,5)); 

const addnum = (n1, n2) => ( n1 + n2 ) //implicit return
console.log(addnum(1,4));