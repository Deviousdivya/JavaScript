// const tinderUser = new Object() //creating new object using Object constructor 

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        username : {
            firstname : "Divya",
            lastname : "Bharat"
        }
    }

}

// console.log(regularUser.fullname.username.lastname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// console.log(obj3) // same problem as in array , they didn't join (output = { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } })


// const obj3 = Object.assign({}, obj1, obj2, obj4) //{} is the target and other objects are source [Object.assign(target,source)]
// console.log(obj3)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser)); // returns an array of key-values subarrays ([ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ])

console.log(tinderUser.hasOwnProperty('isLoggedIn'))

const course = {
coursename : "js in hindi",
price : 999 , 
courseInstructor : "Divya"
}

console.log(course.courseInstructor)

const {courseInstructor : Instructor} = course

console.log(Instructor)


//Json Format
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]