// Types of Data Types

// 1 Primitive Data types
// Number, String, Boolean, null (object), undefined, BigInt, Symbol
let score=35
console.log(typeof score)

let name= "Lucky"
console.log(typeof name)

let valid=false
console.log(typeof valid)

const outside_termperature=null
console.log(typeof outside_termperature)

let temperature;
console.log(typeof temperature)

const id=Symbol("123")
const id2=Symbol("123")
console.log(typeof id)
console.log(id===id2)        // id and id2 are not equal because of symbol data types

const bigNumber=92837485872382436454574567445646404954578n
console.log(typeof bigNumber)


// 2 Reference (Non primitive)      

// Array, Objects, Functions        Gives data type as object except function.. function give function callledd object function
// 1) Array
const heroes=["Hatim", "Shaktiman", "Sonpari"]
console.log(typeof heroes)

// 2) Objects
let myObj={
    name: "Lucky",
    age:22
}
console.log(typeof myObj)

// 3) Function
const myFunction = function(){
    console.log("Hello World!")
}
console.log(typeof myFunction)