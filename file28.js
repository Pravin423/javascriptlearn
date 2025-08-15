//primitive vs refrence data type


//in primitive datatype variables are stored in stack so if one variable gets changed another wont change value 
//so in below example num1=6; num2=num1, num1++ soo num1=7 num2 remains 6 because it is primitive the value of second variable wont change

// let num1=6;
// let num2=num1;
// console.log(num2)
// num1++
// console.log(num1)


//refrence type
//refrence type wont get stroed in stack it will store in heap
//array

let array1=["item1","item2"];
let array2=array1;
console.log(array1)
console.log(array2)
array1.push("item3");
console.log("addedd item 3 for refrence type ")
console.log(array1)
console.log(array2)
