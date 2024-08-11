const user = {
    username: "lucky",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "lucky"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "lucky"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "lucky"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {     //curly braces is required as not printed in same line
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )   //no need of curly braces id printed in same line

const addTwo = (num1, num2) => ({username: "lucky"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()