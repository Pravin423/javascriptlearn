//objects inside array

const users = [
    { user_id: 1, firstname: "test1", age: 20 },
    { user_id: 2, firstname: "test2", age: 20 },
    { user_id: 3, firstname: "test3 ", age: 20 }
]

console.log(users)
// 
// {user_id: 1, firstname: 'test1', age: 20}

// {user_id: 2, firstname: 'test2', age: 20}

// {user_id: 3, firstname: 'test3 ', age: 20}

for (const user of users) {
    console.log(user.firstname)
    
}//test1
//  test2
//  test3 