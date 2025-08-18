const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash","batman"]

// marvel_heros.push(dc_heros)//add elment in existing array

// console.log(marvel_heros);
// console.log(marvel_heros.length);

// const all_heros=marvel_heros.concat(dc_heros) // concat return new array as o/p
// console.log(all_heros);

const allNewHeros = [...marvel_heros,...dc_heros] // spread operator
//console.log(allNewHeros);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5] ] ]

const real_another_array = anotherArray.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("janki")); // .isArray() = check whether the argument is array or not
console.log(Array.from("janki"));// .from() = converts arguments into array element
console.log(Array.from({name: "janki"})); // inetersting array


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1 ,score2, score3)); // .of() = similar to from()
