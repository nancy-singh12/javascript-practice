function makeFunc() { 
    const name = "Mozilla";
    function displayName() {
        console.log(name);
    }
    return displayName; //it will return the lexical scope means we will get the outer funtion also notonly current execution context
}

const myFunc = makeFunc();
myFunc();
