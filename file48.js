//lexical scope
//A lexical environment in JavaScript is a data structure that stores variables and
//functions defined in the current scope,
//  along with references to all outer scopes.

 

const myVar="value1";

function myApp(){
    function  myFun(){
        console.log(myVar)
    }
    myFun();//value1

}

myApp();

//basiclly it will first check if myVar is decalred in myFun if not it will check its lexical scope that is myApp 
//if it is not declared in myApp it will check its lexical scope(of my App) in there myVar is declare so it will take its refrence
