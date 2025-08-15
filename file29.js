//how to clone arrray

//how to concat two array

// let array1=["item1","item2"];
// array1.push("item3")
// console.log(array1 )
// let array2=array1.slice(1);//it uses the slice function slice array1 from the 0th index and gets the data and stores it in array2
// // console.log(array1===array2);//truee (to check if array2= array1)
// console.log(array2)



//you can also do this with this
// let array1=["num1","num2"];
// let array2=[].concat(array1);// you are creating a empty array with concating array1 in it
// array2.push("num3")

// console.log(array1)//(2) ['num1', 'num2']
// console.log(array2)//(3) ['num1', 'num2', 'num3']


//spread operator
let array1=["test1","test2"];
// let array2=[...array1];//it will spread all the elements of array1 in array2 variable
// console.log(array2)//(2) ['test1', 'test2']
// console.log(array1)//(2) ['test1', 'test2']
//if i want to add new elements only in array2
// let array2=[...array1,"test3","test4"];
// console.log(array1);//(2) ['test1', 'test2']
// console.log(array2)//(4) ['test1', 'test2', 'test3', 'test4']

//or i can do is create a new array and get it here like
let newarray=["item3","item4"];
//not to do like this it will spread all the element in both the arrays into indivival alphabets
// let array2=[...array1+newarray]// ['t', 'e', 's', 't', '1', ',', 't', 'e', 's', 't', '2', 'i', 't', 'e', 'm', '3', ',', 'i', 't', 'e', 'm', '4']
let array2=[...array1,...newarray];
console.log(array1);//(2) ['test1', 'test2']
console.log(array2);//(4) ['test1', 'test2', 'item3', 'item4']
 
