//2)For In loop
const myObj= {
    js: 'javascript',
    cpp:'C++',
    rb:'rubby',
    swift:'Swift by apple'
}
// ForIn loop for Object
for (const key in myObj) {
//    console.log(`${key} shortcut is for ${myObj[key]}`);
}

//ForIn for Arrays
const programming = [ "js", "rb","py","java","cpp"]
for (const key in programming) {
    // console.log(programming[key]);
}

const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")

// for (const key in map) {
//   console.log(key);
// }


