//          15/10/2022
// The conditional operator allows us to write something similar to an if/else 
// statement, but all in one line.
// In this, the 'else' statement is mandatory.
// Anything before the question mark(?) is the 'condition', anything after that
// but before the colon is 'if' statement, and anything after the colon is the
// 'else' statement.
// The ternary operator is in fact an operator, just as the name says, and 
// remember an operator always produces a value, in otherwords, an operator is an 
// expression, meaning that if we have a value, we can then assign that value to  
// variable
const age = 23;
/*      age >= 18 ? console.log(`I like to drink wine 🍷`) :
                console.log(`I like to drink water `);        */
// The example above isn't how it's really used, the example below shows it usage
const drink = age >= 18 ? `wine` : `water`;
console.log(drink);
// If we wanted to declare a variable in an if/else block, we would need to create
// a variable outside the if/else block
let drink2;
if (age >= 18) {
    drink2 = `wine`;


} else {
    drink2 = `water`;
}
console.log(drink2);
// Using the ternary operator, we can have a condition inside a template literal
console.log(`i like to drink ${age >= 18 ? `wine` : `water`}`);
//                  OR
console.log(`i like to drink ${drink}`);
// The ternary operator isn't to replace the if/else statement, it is mostly used
// when we want to take quick decisions