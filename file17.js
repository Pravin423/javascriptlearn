//nested if else

//lets make a game win number =19 if user guess 19 ur guess is right or try again


const winnumber=10;
// let userGuess=prompt("enter a number");
// console.log(userGuess,typeof(userGuess))//111 string(bcoz prompt takes input only in string)

let userGuess=parseInt(prompt("enter a number"));
// console.log(userGuess,typeof(userGuess))//2 'number'

if (userGuess===winnumber) {
    console.log(`${userGuess} your guess is right`)
    
} else{
    if (userGuess<winnumber) {
        console.log("guess is tooo low")
        
    } else {
        console.log("guess is to high")
        
    }
}
