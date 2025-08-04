// singleton
// Object.create


// object literals

const mysym = Symbol("key1") //symbol declaration

const JsUser = {
    name : "Divya",
    "full name" : "Divya Bharat",
    [mysym] : "mykey1",
    age : 18,
    location: "Jaipur",
    email: "divya@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser)
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mysym]) // use [] for symbol
// console.log(JsUser.mysym)  //Undefined output

JsUser.email = "divya@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "divya@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User")
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`) // this is used for referencing towards the same object
}

console.log(JsUser.greeting); //[Function (anonymous)] as output (Finction execute nhi hua hai sirf reference aaya hai)
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());//comment the Object.freeze

