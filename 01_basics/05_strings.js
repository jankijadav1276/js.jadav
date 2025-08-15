const name = "janki"
const repoCount = 50

// console.log(name + repoCount + " value"); //strings concating

console.log( `hello my name is ${name} and my repo count is ${repoCount}`); // string interpollation 

const gameName = new String('janki-JN-jj')
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('n'));

const newString = gameName.substring(0,3) // cannot give negative input it will automatically start from 0
console.log(newString);

const anotherString = gameName.slice(-7,4)
console.log(anotherString);

const newString1 = "    janki   "
console.log(newString1);
console.log(newString1.trim());//trim() works on white state char and aalso have function like trimStart() & trimend()

const url = "https://janki.com/janki%12jadav"

console.log(url.replace('%12','-')); // replace string
console.log(url.includes('hitesh')); // to check whether it is in string or not


console.log(gameName.split('-'));// method name: split(separator,limit)
