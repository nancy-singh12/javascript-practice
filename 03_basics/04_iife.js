// Immediately invoked function expressions (IIFE)
// to avoid the pollution in function due to global scope we use IIFE
// (function definition)(execution call)

(function chai(){ //Named IIFE
    console.log(`DB CONNECTED`);
})();
// sometimes code editor do not know  where the function ends and next  funnction is to be executed so, to  prevent this kind of problem add ; at the end of function
( (name) => {  //simple IIFE
    console.log(`DB CONNECTED TWO ${name}`);
})("Nancy")