let mydate = new Date()
console.log(mydate);
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toISOString());
console.log(mydate.toLocaleString());
console.log(mydate.toJSON());
console.log(mydate.toTimeString());
console.log(mydate.toLocaleTimeString());

// let myCreatedDate = new Date(2024, 0, 23, 5, 3)
let myCreatedDate = new Date("01-14-2024")
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);//returns value in milliseconds from 1 jan,1970
console.log(myCreatedDate.getTime());// returns value at that time
console.log(Math.floor(Date.now()/1000));//returns in sceonds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDate());
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday: "long"
})