// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1,2,3,4,5]

for (const item  of arr) {

    // console.log(item)
    
}


const greetings = "Hello world!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`)
}


const map = new Map()

map.set('In', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// console.log(map); // returns an object of map key,value

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}


const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }  // Object is not iterable using forof loop