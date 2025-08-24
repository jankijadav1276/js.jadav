// var c= 300
let a=300
//Scope
if(true){
  let a = 10
  const b = 20
//  console.log("Inner:",a);

} // written in {} is known as block scope 
//outside of {} is known as Global scope
// console.log(a);
// console.log(b);
// console.log(c); //returns c because of data type var or you didn't write var

function one(){
    const username ="janki"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); can't access
    
    two()
}

//one()

if(true){
    const username ="janki"
    if(username === 'janki'){
        const website=" youtube"
        // console.log(username+website);
        
    }
    // console.log(website);  //can't access 
}
// console.log(username); //can't access


//************************** Interesting **************/

console.log(addone(5));

function addone(num){
    return num +1
}

// addone(5)
// addTwo(5) // cannot be declare here because of its declaration 
const addTwo = function (num){
    return num + 2
}

// addTwo(5)

