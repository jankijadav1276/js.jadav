const accountId = 144553 // var let or const = assign value to the memory // const means cannont be changed 
let accountEmail = "jankijadav@gmail.com" // sloved the scope problem 
var accountPassword = "12345" // has scope problem 
accountCity = "jaipur"
let accountState;

// accountId = 2 // not allowed 
accountEmail = "jj@gmail.com"
accountPassword = "212121"
accountCity = "bangaluru"


console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/* 
prefer not to use var
because of issur in block scope and functional scope
*/ 
