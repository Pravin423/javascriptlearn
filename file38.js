//how to iterate loops in array
const person={name:"tetname",age:20,hobbies:["gaming","singing"]};

//for in loop
//object.keys


// for (let i in person ){
//     console.log(i)
// }//name
// //age
// //person


// this is just giving the key i need the values
// for(let i in person){
//     console.log(person[i]);
//     console.log(`${i}:${person[i]}`)//name:tetname age:20 hobbies:gaming,singing (use to getkey value pairs both)
// }
//testname
//20
// ['gaming', 'singing']



//Object.key
Object.keys(person)
console.log(person)//{name: 'tetname', age: 20, hobbies: Array(2)}