const userEmail = []

// if (userEmail) {
//     console.log("got user email");
// }else{
//     console.log("don't have email");
// }

// falsy values 
// false , 0 , -0 , BigInt 0n, "" , null , undefined , NaN

//truthy values 
// "0" , "false" , " ", [], {}, function(){},

// if (userEmail.length === 0) {
//     console.log("array is empty");
// }

const emptyObject = {}

// if(Object.keys(emptyObject).length === 0){
//      console.log("object is empty");
// }

//Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15 // give first encountered value

console.log(val1);

// Terniary Operator
//Syntax : condition ? true:false

const iceteaPrice =100
iceteaPrice<=80 ? console.log("less than 80") : console.log("more than 80 ");