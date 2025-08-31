//default parameters

// function sum(a,b){
//     if (typeof b === "undefined") {
//         b=1;
        
//     }
//     return a+b;
// }

// const ans= sum(3,2)
// console.log(ans)//5/// traditionally we used to do this to set default parameters but now

/////////////////////here both values are given so no use of default para
// function sum(a,b=0){
//     return a+b

// }

// const ans=sum(3,1);
// console.log(ans)//4

////////////////here b value not given so we have set b=0 as default parameter
////////////////if nno values are passed the default parameter will be used
function sum(a,b=0){
    return a+b

}

const ans=sum(3,);
console.log(ans)//3