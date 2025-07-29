//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId); //symbol

// typeof arr → "object"

//typeof function = "function"

//typeof object = "object"

//typeof null = "object"



// +++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive)  used for primitive datatypes
//let a = 10;
//let b = a;  Copy of the value (not reference)


let myyoutubename = "divyabharat@gmail.com"

let anothername = myyoutubename
anothername = "chaiaurcode"

console.log(myyoutubename)
console.log(anothername)


//Heap (Non-Primitive) Used for non-primitive values
//slower than heap

//let obj1 = { name: "Alice" };
//let obj2 = obj1;  Both point to the same object in the heap


let userone = {
    email : "usergoogle.com",
    upi : "user@bly"
}

let usertwo = userone

usertwo.email = "divyabharat@gmail.com"

console.log(userone.email)
console.log(usertwo.email)