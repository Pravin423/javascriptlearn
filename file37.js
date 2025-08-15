//diff between dot and bracket in notation
const key='email';
const person={name:"testname",age:20,"person hobbies":["singing","football","gaming"]};
//to access elements through bracket notations
console.log(person["person hobbies"])//['singing', 'football', 'gaming']

// person[key]="tst@email"; // if i want to store a key(email) but the key is stored in a varaible(key) we can use it like this
// console.log(person)/{name: 'testname', age: 20, person hobbies: Array(3), email: 'tst@email'}

