const age = 15;
// when writing the 'if' syntax, the paranthesis is for the condition, and the 
// curly brackets is for what you want the code to do if the condition is met. 

// if 'isOldEnough' is true, then the code would be executed
if (age >= 18) {
    console.log(`Sarah can start driving license🚗`);
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years`)
}
// the 'else' would be executed whenever the 'if' condition is false or isn't met;
// The 'else' block isn't mandatory, if the 'if' condition isn't met, JS moves on.

/* the 'if' 'else' statement is called the if else control structure,
if (){

}else {

}
It is called a control structure because it gives more control over the way our, 
code if executed
*/
const birthYear = 2012;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
// Any code written inside a 'block' ({code inside here}) can't be accessed,
// outside the block, which was the reason why we created an empty variable, and
// placed a condition on what will be assigned to it.

// 13/10/2022
//               TYPE COERCION FOR IF/ELSE STATEMENTS
const money = 0;
if (money) {
    console.log(`don't finish it bobo`);
} else {
    console.log(`Go find work eje`);
} // This would bring `go find work eje` cause the if/else statment changes whatever
// is in the 'condition' part into a boolean, and if the boolean in true, the code
// would show the 'if' part of the code, if not it'll show the 'else' part of the 
// code. And here the variable has a value of Zero, which is a falsy value.
const wallet = 100; // Here 100 is a truthy value, and therefore the 'if' would show
if (wallet) {
    console.log(`don't finish it bobo`);
} else {
    console.log(`Go find work eje`);
}

let height; // undefined is a falsy value
if (height) {
    console.log(`YAY! height is DEFINED`);
} else {
    console.log(`height is not defined`);
}

height = 20; // here height is defined
if (height) {
    console.log(`YAY! height is DEFINED`);
} else {
    console.log(`height is not defined`);
}

height = 0; // here height is also undefined, cause what we're assigning it to
if (height) { // is a falsy value, therefore, the 'else' is triggered. This is a bug
    console.log(`YAY! height is DEFINED`);
} else {
    console.log(`height is not defined`);
}
// We also have an else if statement, we can have multiple 'else if' statements
const _favorite = Number(prompt(`what's your favorite number`));
console.log(_favorite);
console.log(typeof _favorite);
if (_favorite === 23) {
    console.log(`Cool 23 is a cool number!`);
} else if (_favorite === 7) {
    console.log(`7 is also a cool number`);
} else {
    console.log(`your number is uncool eje`);
}