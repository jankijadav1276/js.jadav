const score = 400
// console.log(score);


const balance = new Number(100)
// console.log(balance);
// console.log(typeof(balance));

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNum = 23.8966
// console.log(otherNum.toPrecision(3));

const Num1 =1000000
// console.log(Num1.toLocaleString('en-In'));

// **************************************--MATHS--*********************************************************

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.33));
// console.log(Math.ceil(4.3));//always choose upeer number in case round off
// console.log(Math.floor(4.8));//always choose lower number in case of round off
// console.log(Math.min(2,4,5,7));
// console.log(Math.max(2,4,5,7));

console.log(Math.random()); // Math.random always gives value in between 0 & 1
console.log((Math.random()*10) + 1); // gives value between 1 to 9

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min+1)) + min)