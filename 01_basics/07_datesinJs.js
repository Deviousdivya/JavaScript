// Dates

const myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleTimeString())



// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());
// console.log(myCreatedDate)


let myTimeStamp = Date.now()  //Current time in milliseconds

// console.log(myTimeStamp);  //Current time in milliseconds
// console.log(myCreatedDate.getTime()); //Same as above, via Date object
// console.log(Math.floor(Date.now()/1000)); //Current time in seconds (Unix time)




let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());
