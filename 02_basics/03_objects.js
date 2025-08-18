//singleton 
//Object.create this is constructor method made singlrton object

//objects literature

mySym = Symbol("key1")

const JsUser = {
    name: "Janki",
    "full name": "Jadav Janki",
    [mySym]: "myKey1", // to access symbol // syntax of declaring//refer symbol
    age: 18,
    location: "patod",
    email: "janki@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Mondays", "Tuesday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "janki@hh.com"
// Object.freeze(JsUser) //freeze() = freeze the object after this the changes doesn't count
JsUser.email = "jadav@jj.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello JS users");
}
JsUser.greetingTwo = function(){
    console.log(`hello JS user , ${this.name}`);
}

console.log(JsUser.greeting);//function doesn't execute just give reference
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
