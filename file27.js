//array methods
//push pop

let fruits=["apple","mango","banana","pear"];

//to add a new element into the array use PUSH
console.log(fruits)//['apple', 'mango', 'banana', 'pear']
// fruits.push("testfruits");
// console.log(fruits)//['apple', 'mango', 'banana', 'pear', 'testfruits']


//to remove a element from the array use POP
//pop always removes the last element
// let removedFruit=fruits.pop();
// console.log(fruits)//['apple', 'mango', 'banana']

//so after doing pop the element that has poped or removed get stored in the pop method 
//to check which element is stored in pop method
// console.log(fruits.pop());///banana

//to store the poped element we can store it in variables

// console.log(removedFruit)//banana

//unshift
//used to add elements from the start
fruits.unshift("grapes");
console.log(fruits)//['grapes', 'apple', 'mango', 'banana', 'pear']

//shift
//used to remove elements from the start
fruits.shift();
console.log(fruits)//['apple', 'mango', 'banana', 'pear']


///push and pop are faster as compared to shift unshift