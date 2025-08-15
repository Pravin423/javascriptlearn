//array destructuring

const array1=["value1","value2","value3","value4","value5   "];
//i want to create  2 variables and store first value in first variable and following respectively
// let var1=array1[0];
// let var2=array1[1];

// console.log(var1,var2)//value1 value2 you can do like this but in js u have  a shortcut
//we need to destructure array

// let [var1,var2]=array1;
// console.log(var1,var2)//value1 value2


//if i want to store value 3 in variable 2
// let [var1, ,var2]=array1;
// console.log(var1,var2)//value1 value3


//if i want to store value3,value 4 into  a diff array
// let [var1,var2]=array1;
// mynewArray=array1.slice(2);
// console.log(mynewArray);// ['value3', 'value4']


//if i want to store the remaining values in one variuable i can use the spread operator
let [var1,var2,...rest]=array1
console.log(rest)//['value3', 'value4', 'value5   ']


