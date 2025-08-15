//for loop in array

let fruits=["apple","mango","grapes","banana"];
let fruits2=[];
for (let index = 0; index < fruits.length; index++) {
    fruits2.push(fruits[index].toUpperCase());
    
}
console.log(fruits2)//(4) ['APPLE', 'MANGO', 'GRAPES', 'BANANA']



// fruits .forEach(fruits => {
//     console.log(fruits)
    
// });