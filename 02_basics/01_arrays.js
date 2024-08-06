const arr=[1, 2, 3, 4, 5]       // array initialization 1
const arr2=new Array(1, 2, 3, 4, 5)     // array initialization 2
console.log(arr)
console.log(arr2)

console.log(arr[3])

console.log(arr.length)

arr.push(6)     //insertion at last
arr.push(7)
arr.push(8)
arr.pop()       // remove last element
console.log(arr)

arr.unshift(0)      //insertion at the starting
console.log(arr)

arr.shift()     //remove first element
console.log(arr)

console.log(arr.indexOf(9))     // tell the index of the given character/number.. if not present return -1

console.log(arr.includes(6))    // checks whether the element is present or not

console.log(arr2);
const arr3=arr2.slice(1,4)
const arr4=arr.splice(1,3)
console.log(arr3)
console.log(arr4)
 console.log(arr2)

