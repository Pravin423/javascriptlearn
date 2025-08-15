//spread operator

// const array1=[10,2,1,2];
// const array2=[5,7,8,9];

// const newarray=[...array1,...array2];
// console.log(newarray)//[10, 2, 1, 2, 5, 7, 8, 9]

//spread operator in obj

const obj1={
    key1:"value1",
    key2:"value2"
}
const obj2={
    key3:"value3",
    key4:"value4"
}
const newObj={...obj1,...obj2};
// console.log(newObj)//{key1: 'value1', key2: 'value2', key3: 'value3', key4: 'value4'}
