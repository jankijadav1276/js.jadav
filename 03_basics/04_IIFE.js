// Immediately Invoked Function Expression (IIFE)

(function chai (){
    //named IIFE
    console.log(`Db connected`);
})();

//Syntax of IIFE (function defination )(to execute);

( (name) => {
    console.log(`DB connected TWo ${name}`);
} )('janki');