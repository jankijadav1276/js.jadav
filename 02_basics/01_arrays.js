//arrays

const myArr = [ 0,1,2,3,4,5]
const myHero = [ "shaktiman", "Naagraj"]

const myArr2 = new Array(2,3,4,6,7)
// console.log(myArr[4]);

// Array Methods

// myArr.push(6)// add new element in array
// myArr.push(7)
// myArr.pop() // remove last element from the array

// myArr.unshift(9) // adds new element in start of array
// myArr.shift() // removes the first element

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));

// const newArr = myArr.join()

// console.log(myArr);
// console.log(typeof newArr);

// *****-- Slice or Splice --******

console.log("A" ,myArr);

const myA1= myArr.slice(1,3)

console.log(myA1);
console.log("B" ,myArr);

const myA2 = myArr.splice(1,3)
console.log("C",myArr);
console.log(myA2);