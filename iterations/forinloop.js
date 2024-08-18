const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(key);       //it will print only keys.. that is it's index starting from 0..
}
for (const key in programming) {
    // console.log(programming[key]);       //it will print it's values
}

// const map = new Map()            
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {         //map is not iterable in this way
//     console.log(key);
// }