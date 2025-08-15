// for in loop in array
//to print each element
const fruits= ['APPLES', 'MAGOES', 'BANANA', 'GRAPES'];
const fruits2=[];


for ( let index in fruits){
    fruits2.push(fruits[index].toUpperCase());
    
}
console.log(fruits2)//['APPLES', 'MAGOES', 'BANANA', 'GRAPES']