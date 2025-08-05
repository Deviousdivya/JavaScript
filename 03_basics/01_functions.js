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