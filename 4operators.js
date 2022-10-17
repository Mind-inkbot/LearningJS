//                          Basic Operators
// an operator allows us to transform values and combine multiple values.
//                 MATHEMARICAL OR ARITHMETIC OPERATORS
/*  const ageJonas = 2037 - 1991;
    const ageSarah = 2037 - 2018;
*/
// considering we have a value that is repeating itself, we don't want that cause if 
// the year changes then we would have to change it in both places we can make 
// that value a variable
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
// we can log multiple values by just seperating them with commas
console.log(ageJonas, ageSarah);
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 = 2 * 2 * 2 = 8

// we can use the '+' to join strings(concatenate strings)
const firstName = 'Kolade';
const lastName = 'Idowu';
console.log(firstName + lastName);
// if we want to add a space to it, we input an empty string
console.log(firstName + ' ' + lastName);

//                  ASSIGNMENT OPERATORS
// the most basic one is the equal sign (=)
let x = 10 + 5; // equals 15 
x += 10; // '+=' x = x + 10. x = 15 + 10. equals 25
x *= 4; // x = x * 4. equals 100
x++; // x = x + 1. equals 101
x--; // x = x - 1; equals 100
console.log(x);

//              COMPARISON OPERATORS
// we use comparison operators to get boolean values
console.log(ageJonas > ageSarah); // >, <, >=, <=
// to test if Sarah is upto 18
console.log(ageSarah >= 18);
//               OPERATORS PRECEDENCE
const _now = 2037;
const _ageJonas = _now - 1991;
const _ageSarah = _now - 2017;
console.log(_now - 1991 > _now - 2018);
// JS has an order in which operators are executed. To check the precedence
// we use 'mdn. operator precedence', the one with a higher num. gets executed
// first and the one with the lower num. gets executed last. 
// An example of how we can define 2 variables is given  below
let w, y;
w = y = 25 - 10 - 5;
const averageAge = (_ageJonas + _ageSarah) / 2;
console.log(_ageJonas, _ageSarah)
console.log(averageAge);

// 13/10/2022
//                  EQUALITY OPERATORS
const age = 18;
if (age === 18) {
    console.log(`you just became an adult`);
}
// (===) means equal to
// if we just want to write one line of code in our if/else statements, then we
// don't need to write the curly brackets.
// The triple equal to is the strict type, mainly because it doesn't perform type
// coercion.
console.log('18' === 18); // false
// The 'loose' equality operator (==) does type coercion
console.log('18' == 18); // true. Cause the number 18, would be converted to a
// number and then give an answer. we should try not to use this one though

// if we want to get info from a user, we can use the prompt tag
/*       prompt(`what's your favorite number`);      */
// but we need to store it, so we create a variable
const favorite = prompt(`what's your favorite number`);
// the ans would be a string
console.log(favorite);
console.log(typeof favorite);
if (favorite == 23) {
    console.log(`Cool, your num's dope blud`);
}
if (favorite === 23) {
    console.log(`Cool 23 is a cool number!`)
} // wouldn't show cause the number is a string
// BUT we can convert the value offavorite into a string by wrapping it into the  
// NUMBER function.
const _favorite = Number(prompt(`what's your favorite number`));
console.log(_favorite);
console.log(typeof _favorite);
if (_favorite == 23) {
    console.log(`Cool, your num's dope blud`);
}
if (_favorite === 23) {
    console.log(`Cool 23 is a cool number!`)
}
// We also have an operator for different.
// This is the strict version (!==) no coercion.
// This is the loose version (!=) coercion is present.
if (_favorite !== 23) {
    console.log(`why not 23 😐`);
} else {

}