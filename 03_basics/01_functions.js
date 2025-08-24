// Functions 
function sayMyName(){
  console.log("J");
  console.log("A");
  console.log("N");
  console.log("K");
  console.log("I");  
}

//sayMyName() //sayMyname is judt Reference

// function addTwoNumbers(number1 , number2){ // input in function defination is called parameters
//      console.log(number1 + number2);
// }
function addTwoNumbers(number1, number2){
    // let result = number1+number2
    // return result // after return statement the function stop executing
    // console.log("janki"); // dosen't work after return statement 
    return number1+number2 
}
const result = addTwoNumbers(2,3) // values passed in function from user is known is arguments

// console.log("result:" , result);
function loginUserMessage(username){
    if(username === undefined /*also can use !username*/){
        console.log("please enter username");
        return
    }

    return `${username} just logged in`
}

// console.log(loginUserMessage("Janki"))
// console.log(loginUserMessage());

function calculateCartPrice(val1,val2,...num1) { //(...) is known as rest operator and also known as spread operator
    return num1
}

// console.log(calculateCartPrice(200,400,500,600,700)); // val1=200 , val2=400 and num1=[500,600,700]

//object passing in function
const user={
    username:"janki",
    price:199
}

function handleObject(anyobject) {
    // console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username:"sam",
    price:399
})

// array passing in function
const myNewArray = [200, 400, 100, 600]

function returnSecondvalue(getArray) {
    return getArray[1]
}

// console.log(returnSecondvalue(myNewArray));
console.log(returnSecondvalue([200,400,100,600]));
