//objects
//arrays are good but not sufficient for real world data
//objects store key value pairs
//objects dont have index
//object is refrence type just like array
//{} is used for objects

//how to create object
//             key:"value"
// const person={name:"testname",age:20};
// console.log(person)//{name: 'testname', age: 20}

//how to access data from object
// console.log(person.name)//testname
// console.log(person.age)//20



//we can store array too in an object
// const car={carname:"testcar",price:300000,color:["red","blue","black"]};
// console.log(car.carname)//testcar
// console.log(car.price)//300000
// console.log(car.color)// ['red', 'blue', 'black']
// console.log(car.color[2])//black


//how to add key value pair to a object
const person={name:"testname",age:20};
// person.gender="male";//dot method
// console.log(person)//{name: 'testname', age: 20, gender: 'male'}
//bracket method to access elements in object

console.log(person["name"])//testname(in javascript key is in string by default)


