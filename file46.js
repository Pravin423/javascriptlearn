//hoisting in function
//Hoisting in JavaScript is a behavior where variable and function declarations are conceptually moved to the top of their containing scope during the compilation phase, before the code is executed. 
// This means you can use variables and call functions before they are formally declared in your code. 


// hello();//hello world
// function hello(){
//     console.log("hello world")
// }

// this only works in function declarations not in function expression

// hello();//Uncaught ReferenceError: Cannot access 'hello' before initialization
// const hello= function(){
//     console.log("hello world")
// }