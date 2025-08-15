//intro to arrayss
//array is collection of elements or ordered collection of items
//refrence type---object
//array is an object
//how to create arrays


//[] --- for arrays
//ordered collection- bcoz it has index and are mutable
// let fruits=["apple","mango","banana","pear",1,2];
// console.log(fruits)

// console.log(fruits[3])//--pear


//array indexing

let fruits=["apple","mango","banana","pear",1,2];
//if i want to do changes in array i wantto change mangoes to cherry
fruits[1]="cherry";
console.log(fruits[1])//cherry
console.log(typeof(fruits))//object
//if i want to check whether the array is an array in detail
console.log(Array.isArray(fruits))//true


