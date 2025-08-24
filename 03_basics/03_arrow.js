const user = {
    username: "janki",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`); //this means current context
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); // in node environment this refer to {} because there is no global variable
//while in google chrome environment it will gives window{} because window is basic global variable in it

// function chai(){
//     let username = "janki"
//     console.log(this.username);
//     //only work in object reference but not in function
// }

// chai()
// const chai =function (){
//     let username="janki"
//     console.log(this.username);
// }

const chai = () => {
    let username = "janki"
    // console.log(this);
}
chai()

//  arrow function 
// Syntax :- () => {}

// const addTwo = (num1 , num2) => {
//     return num1+num2
// }
// if you used {} need to write returnkey word
// const addTwo = (num1 , num2) =>  num1+num2 //implicit return 
// const addTwo = (num1 , num2) => (num1+num2 ) // in paranthesis you don't need to write return keyword

const addTwo = (num1 , num2 ) => ({username: "janki"})
console.log(addTwo())

const myArray = [ 2,5,7,9]

myArray.forEach()