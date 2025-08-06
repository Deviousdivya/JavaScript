function sayMyName(){
    console.log("D")
    console.log("i")
    console.log("v")
    console.log("y")
    console.log("a")
}

// sayMyName()

// function addTwoNumbers(num1,num2){
//     console.log(num1+num2)
// }
// addTwoNumbers(3,7)


function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(9, 5)
// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){ //(!username) runs if it is true
        console.log("Please enter a username")
        return
    }

    return(`${username} just logged in`)

}

// console.log(loginUserMessage("Divya"))
// console.log(loginUserMessage())



function calculateCartPrice(val1,val2,...num1){
    return num1
}

// console.log(calculateCartPrice(200,300,400,500))

const user = {
    username : "Divya",
    price : 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user) //method 1

// handleObject({username : "sam" ,
//     price : 399
// }) // method 2

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
