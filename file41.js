//Object Destructuring


// const personobj={
//     personname:"test",
//     age:20,
    
// };



// const{personname,age}=personobj;
// console.log(personobj)//{personname: 'test', age: 20}


//you can declare variable
// let {personname:test1,age:test2}=personobj;// i have declared personame to test1 variable and age to test2 variable
// console.log(test1,test2)//test 20

// console.log("test",personname)//personname is not defined (because i have changed personname to test1 variable)



const personobj={
    personname:"test",
    age:20,
    gender:"male",
    height:"180cm"
};
//i want to sore gender and height in a new obj and personname and age in 2 diff variable

let{personname:var1,age:var2,...rest}=personobj;
console.log(var1,var2,rest)//test 20 {gender: 'male', height: '180cm'}