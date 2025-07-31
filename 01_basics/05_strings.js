const name= "divya"
const repocount = 50

// console.log(name + repocount + " value")

// console.log(`hello everyone , this is ${name} and repocount is ${repocount}`)  //use backticks

const gameName = new String('divya-db-com')

console.log(gameName[0])
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());


// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('v'));

const newString = gameName.substring(0, 4)
console.log(newString);


const anotherString = gameName.slice(-8, 4)
console.log(anotherString);


const newStringOne = "   divya    "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://divya.com/divya%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));  // to split into array