// variables
// there are 3 ways to declare variables in javascript, which are : let, const and
// var. 'let' and 'const' were introduced in ES6 and are therefore modern
// (ES6 and above are modern JS), while 'var' is the old way
// LET: this is used to declare variables that can change later during the
// execution of our program(dynamic typing). E.G. 
let age = 30;
age = 31;
// this is called reassigning a value to a variable or mutating.
// we can't declare empty variables
// CONST: this is used to declare variables that are not suppossed to change i.e. 
// the value in a const variable cannot be changed. E.G.
const birthYear = 1991;
// the fact that they cannot be changed means that they are immutable, and we 
// can't have empty variables
// As best practice for writing clean code, we should use const, and reduce
// the usage of 'let', it(let) should only be used when we're sure that the value
// of the variable is going to change.
// VAR: this should'nt be used at all, it very similar to let, E.G.
var job = 'programmer';
job = 'Teacher';
