// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9) //add element at the beginning of the array
// myArr.shift() //remove element from the starting of the array

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

const newArr = myArr.join()

// console.log(myArr)
// console.log( typeof(newArr))


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) // makes copy of the original array

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3) // manipulates the original array
console.log("C ", myArr);
console.log(myn2);