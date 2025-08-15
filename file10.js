//template string

let age=21;
let firstname='test'

//expected output="my name is test and age is 22"
//backtick `` and then import variable ${variable_name}


let aboutme=`my name is ${firstname} and age is ${age}`;
console.log(aboutme)