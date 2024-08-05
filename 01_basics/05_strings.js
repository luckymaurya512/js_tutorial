const name="Lucky"
const repoCount=10
console.log(name + repoCount)       // Not recomended

console.log('My name is ${name} and my repo count is ${repoCount} ');


console.log(name.length)

console.log(name[2])        // character at 2nd index

console.log(name.toUpperCase())

console.log(name.charAt(2))

console.log(name.indexOf('y'))

const newString=name.substring(0,3)     //starts from 0 or greater
console.log(newString)

const st2=newString.slice(-2,1)         // can start from negative number.. to reverse direction
console.log(st2)

const a="   dksdh   "
console.log(a)
console.log(a.trim())       // removes white spaces

const variable= "Myy Name is Lucky Maurya"
console.log(variable.replace('Lucky', 'Ravi'))      //Replace words or character

console.log(variable.includes('Lucky'))            // Checks whether the given character or word are present or not

console.log(variable.split(' '))                   // Splits the given set of input into array 