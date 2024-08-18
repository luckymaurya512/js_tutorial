const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){      //forEach loop... need to paas a function
//     console.log(val);
// } )

// coding.forEach( (item) => {      // arrow function has been passed
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {       // forEach loop on array of objects
    
    console.log(item.languageName);
} )