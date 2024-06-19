const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// filter iterate on each value in an array but returns only those value for which the given condition is true
// const newNums = myNums.filter( () => num > 4)

// const newNums = myNums.filter( () => {
//     return num > 4 //to use return we have to use scope
// })

const newNums = []
myNums.forEach( (num) => {
    if(num > 4){
        newNums.push(num)
    }
})
console.log(newNums);

