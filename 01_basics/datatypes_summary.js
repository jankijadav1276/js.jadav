//primitive datatypes(call by value)(changes made in copy doesn't affect original value)
// 7 types: String, Number, Boolean, null, undefined, Symbol(use to make any value special(unique)), BigInt

const score=100
const scoreValue=100.3

const IsLoggedIn = false
const outsideTemp =  null // null typesof = object 
let userEmail; //undefined

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId);

const bigNumber  = 3454565473434564345n

//Reference datatyes(Non primitive)
//Arrays, Objects, Functions 
//mostly return type would be object 

const heros = ["shaktiman","naagraj","doga"]
let myObj = {
    name: "janki",
    age: 19,
}

const myFunction = function () {//return type object function 
    console.log("Hello world!!");   
}

//console.log(typeof myFunction);

//******************************************************************************************************************************************** 

// Stack memory (primitive)// you get copy doesn't affect og value, Heap memory (non primitive)// you get reference of og value

let myYoutubename = "jankijadavYT"

let anothername = myYoutubename
anothername = "chaiaurcode"

// console.log(anothername);
// console.log(myYoutubename);

let userOne= {
    email: "user@google.com",
    upi: "user@ybl",
}

let userTwo = userOne
userTwo.email = "user2@google.com"

console.log(userOne);
console.log(userTwo);