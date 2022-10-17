// 13/10/2022/    
// 6:45
// Boolean Logic is a branch of computer science that uses true or false values 
// to solve complex logical problems.
// We would only be scratching the surface and touching only AND, OR and NOT.
// E.G. (A) Sarah has a drivers license. (B) Sarah has good vision. either of 
// can be true or false.
// using the AND operator.  denoted by '&&'
// Sarah has a driver's license and a good vision [combination of (A) and (B)].  
// How do we find out if this statement as a whole is true or false?
// Both of them have to be true for the statement to be true, if one of them is 
// false, then the whole statement is false, if both of them are false, them the 
// statement is false.
// For multiple variables, they all have to be true for the combination to output
// true.
// using the OR operator  denoted by '||'
// [(A) OR (B)] the output would be true if one of these is true, and would be 
// if both of them are true. 
// If we have multiple variables, we just need one to be true, then the output
// would return true, we can only have false if ALL of them are false.
// using the NOT operator  denoted by '!'
// This doesn't combine values, it acts on one boolean value. It only just inverts
// it, so if (A) is true, it'll become false.
//                  EXAMPLES
const hasDriversLicense = true; // A
const hasGoodVision = true; // B
console.log(hasDriversLicense && hasGoodVision); // using AND
console.log(hasDriversLicense || hasGoodVision); // using OR
console.log(!hasDriversLicense); // using the NOT

if (hasDriversLicense && hasGoodVision) {
    console.log(`Sarah is able to drive!`);
} else {
    console.log(`someone else should drive....`)
}

const isTired = false;
console.log(hasDriversLicense && hasGoodVision && isTired);
console.log(hasDriversLicense || hasGoodVision || isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log(`Sarah is able to drive!`);
} else {
    console.log(`someone else should drive....`)
}
