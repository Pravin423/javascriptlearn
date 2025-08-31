//function inside function

// const app=()=>{
//     console.log("inside")
// }

// app();//inside



const app=()=>{
    function sum(num1,num2){
        console.log(num1+num2)
    }
    const mul=(num1,num2)=>{
        console.log(num1*num2)

    }
    console.log("function in function");
    sum(1,2)

}
app();//function in function
//3