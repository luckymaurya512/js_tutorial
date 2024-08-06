const marvel_heroes=["ironman", "thor", "spiderman"]
console.log(marvel_heroes)
const dc_heroes=["flash", "batman", "superman"]
console.log(dc_heroes)
//  marvel_heroes.push(dc_heroes)       // the next array will be added to the top as a single element of an array
//  console.log(marvel_heroes[3][1])
 console.log(marvel_heroes[2])     
 
 const all_heroes=marvel_heroes.concat(dc_heroes)   //merge both the arrays in a single new array
 console.log(all_heroes)

 const all_new_heroes=[...dc_heroes, ...marvel_heroes]  //split.. work same as concat
 console.log(all_new_heroes)


 console.log(Array.from("Lucky"))       //make array from given set of words

 const another_array=[1,2,3,[4,5],6,[7,8,[9]]]
 console.log(another_array)
 const real_another_array=another_array.flat(1)     //it normalize the array to given depth.. infinity for infinite depth
 console.log(real_another_array)