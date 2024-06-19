// widely used loop

const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach(item => {
    console.log(item);
});

coding.forEach(function (val){
    console.log(val);
})

function printMe (arr){
    console.log(arr);
}
coding.forEach(printMe)

// some other things we can fetch with foreach

coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
})

// usage of foreach when so many objects are present in array

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
    {
        languageName: "ruby",
        languageFileName: "rb"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})

// foreach can't return value