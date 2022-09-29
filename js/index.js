// Iteration 1: Names and Input
//
let hacker1 = "nissan";
    console.log(`the driveers name is ${hacker1}`);
let hacker2 = "TATA";
    console.log(`the navigators name is ${hacker2}`)
// Iteration 2: Conditionals
for (let i=0; i<1; i++){
    if (hacker1.length >hacker2.length) {
        console.log(`${hacker1} has longer name`);
    } else if  (hacker1.length<hacker2.length ) {
        console.log(`${hacker2} has longer name`);
    } else {
        console.log(`${hacker1} and ${hacker2} has equal length`)
    }
}

// Iteration 3: Loops
let hackers = "";
for (let i=0; i< hacker1.length;i++){
    hackers += hacker1[i].toUpperCase() + " ";    
}
console.log(hackers);
    