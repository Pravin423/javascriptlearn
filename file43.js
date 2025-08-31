//nested destructuring

const users = [
    { user_id: 1, firstname: "test1", age: 20 },
    { user_id: 2, firstname: "test2", age: 20 },
    { user_id: 3, firstname: "test3 ", age: 20 }
]


// so if i want to destructure the array into multiple indiv array

const [user1,user2,user3]=users;//here const []= array name ---- in [ indiv array name]

console.log(user1)//{user_id: 1, firstname: 'test1', age: 20}

console.log(user1.firstname,user3.age)//test1 20(to get user1 firstname and user 3 age)

//we can do this in this way  since data are stored in object and object is stored in users(array)
// we can destruct object

const [{firstname}, , {age}]= users;
console.log(firstname,age)//test1 20
//this works in the users array we have 3 objects{ user_id: 1, firstname: "test1", age: 20 },{ user_id: 2, firstname: "test2", age: 20 },
// { user_id: 3, firstname: "test3 ", age: 20 }
//so to access sepecifc object we use index and to access specifc element we use their refrence
// so if i want to access first users firstname i did
//const [{firstname}, , {age}]= users;( in this the first index is of first obj in that im accessing firstname )
//  from the second object  i dont want to access anything so i left it blank
// and from the third i want to access age so i did {age} in this third index