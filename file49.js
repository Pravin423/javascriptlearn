//block scope  vs function scope    
//let and const are block scope
//var is function scope

//in js this is a block scope
// {

// }

// { let var1="some value"};
// console.log(var1)//file49.js:11 Uncaught ReferenceError: var1 is not defined
//error because the variable is called outside the scope
//if u are using let and const u can only access it in the block scope not outside it


//but in var we can do it because var is a functtion scope we can access it outside the scope
//i can use it anywhere using var

// {
//     var var2="value2"
// }
// console.log(var2);//value2


// function myApp(){
//     if (true) {
//         let firstname="test";
//         console.log(firstname)//test
        
//     }
//     console.log(firstname)//file49.js:31 Uncaught ReferenceError: firstname is not defined
    
// }
// myApp();

