globalThis.username = "Bharat"
const user = { 
    username : "Divya" ,
    price : 999 , 
    
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`)
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this) //Global object (window in browsers, {} in Node.js)


// function chai(){
//     let username = "Divya"
//     console.log(this.username);
// }

// chai() //define username globally//In a regular function (not a method):
    //  this does NOT refer to the function's local scope.
//      this refers to the global object, depending on where the code runs:
// Browser	        window
// Node.js	        undefined in strict mode, or global object otherwise



// const chai = function () {
//     let username = "Divya"
//     console.log(this.username);
// }
// chai()


// const chai =  () => {
//     let username = "Divya"
//     console.log(this.username);  // undefined  //Yes, inside an arrow function, this.username will look for username on the this it inherits from its surrounding (lexical) scope — which could be the global object, but only if this points to the global object in that context.
// }


// chai()



// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))