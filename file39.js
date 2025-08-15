//Computed properties

const key1="obj1";
const key2="obj2";

const value1="myvalue1";
const value2="myvalue2";

// i want to get these values in key value pair like obj1:myvalue1 , obj2:myvalue2

//bracket method
// const obj={
//     [key1]:[value1],[key2]:[value2]
// }
// console.log(obj)
// //obj1
// // ['myvalue1']
// // obj2
// // ['myvalue2']

//normal method

const obj={};

obj.key1=value1;
obj.key2=value2;
console.log(obj)//key1:"myvalue1 "key2: "myvalue2"
