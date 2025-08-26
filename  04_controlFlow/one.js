// If statement
const isUserLoggedIn = true
const temperature = 41

// if(temperature<50){
//   console.log("less than 50");  
// }else{
// console.log("more than 50");
// }
//< , >, <=, >= ,== , != , === (also check datatype)

const score =200

// if(score>100){
//     const power ="fly"
//     console.log(`USer Power :${power}`);  
// }

// /const balance = 1000

// if (balance >500) console.log("test");

// if (balance <500){
//     console.log("less than");
// }else if( balance <750){
//     console.log("less than 750");
// }else if (balance <900){
//     console.log("less than 900");
// }else{
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedInfromGoogle = false
const loggedInFromemail =true

if (userLoggedIn && debitCard) {
    console.log("Allow to buy courses");
}

if (loggedInfromGoogle || loggedInFromemail) {
    console.log("user logged in");
}