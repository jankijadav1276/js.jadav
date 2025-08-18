//const tinderUser = new Object() // this is singleton object
const tinderUser = {} //non singleton object

 tinderUser.id = "123abc"
 tinderUser.name = "sam"
 tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUSer = {
    email: "sam@gmail.com",
    fullname: {
        userFullname:{
               firstname: "janki",
               lastname: "jadav"
        }
    }
}
// console.log(regularUSer.fullname.userFullname.firstname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
const obj3 = {5:"e", 6:"f"}
//const obj3 = {obj1,obj2}
//const obj4= Object.assign({}/*target*/, obj1, obj2, obj3 /*ther three are source*/)
// if {} is not written then all the changes happen in obj1 means first obj and then obj4==obj1

const obj4= {...obj1,...obj2} // spread operator = spread and combine in final object
// console.log(obj4);

const users = [
    {
        id: 1,
        email: "janki@gmail.com"
    },
     {
        id: 1,
        email: "janki@gmail.com"
    },
     {
        id: 1,
        email: "janki@gmail.com"
    },
]

users[1].email
console.log(tinderUser);


console.log(Object.keys(tinderUser)); //gives keys o/p in form of array 
console.log(Object.values(tinderUser)); // gives value of keys in form of array
console.log(Object.entries(tinderUser));// convert keys and values in array then store in another array

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


//destructuring

const course ={
    coursename: "js",
    price: 999,
    courseInsructor:  "hitesh"
}

// course.courseInsructor
const {courseInsructor: CI} = course

// console.log(courseInsructor);
console.log(CI);

// const navbar = ({company}) =>{

// }
// navbar(company = "hitesh")// it is for REACT

// {
//     "name": "janki",
//     "coursename": "js",
//     "price": "Free"
// }

[
    {},
    {},
    {}
]