let js = 'amazing';
console.log(40 + 8 + 23 - 10);
// the expressions below are examples of value, 
// values are the most fundamental unit of informaation in javascript
console.log('Jonas')
console.log(23)
// the expression below are variables, and how we declare/write variables
let firstName = 'Asake';
// to output a variable, we use the variable's name, and we can use it repeatedly,
// which is useful, cause if we want to change the value to something else,
// we just change it from the variable
console.log(firstName);
console.log(firstName);
console.log(firstName);
// Rules for naming variables
// 1. we used camel casing in this one
// 2. we can use "first_name"
// 3. Variables can't start with numbers, but can include numbers
// 4. Variables can start with and also include letters, '$', and the underscore (_)
// 5. We also can't name variables with reserved javascript keywords, but can be used
// if we add the underscore or the dollarsign
// 7. We shouldn't start variable names with uppercase letters
// 8. Variables that are all in uppercase are reserved for constants that we know will
// never change
// The variable names should also be descriptive
//                  VALUE TYPES
// In Javascript, a datatype/value is either an object e.g. let me = {name : 'Kolade'}
// or a primitive value e.g. let firstName = 'Jonas'; let age = 30;
// We have 7 primitive data types which include number, string, boolean, undefined,
// null, symbol and Bigint
// 1. NUMBERS : floating point numbers used for decimals and integers, they always
// have decimals even if we don't see them or don't define them e.g. let age = 23;
// 2. STRINGS : sequence of characters that are used for text, they are always in
// quotes, either double quotes or single quotes, but never both, otherwise JS will
// confuse them for variable names e.g. let firstName = 'Jonas'.
// 3. BOOLEAN : Logical datatype that can only be true or false, it is used for taking
// taking decisions e.g. let fullAge = true;
// 4. UNDEFINED : Value taken by a variable that is not yet defined ('empty value')
// it is a variable that has been declared but we didn't assign any value to it
// e.g. let children;. And it isn't allowed(we can't declare a variable without value)
// 5. NULL : also means 'empty value'
// 6. SYMBOL : this was introduced in (ES2015) value that is unique and cannot be
// changed.
// 7. BigInt : started in (ES2020) this was used for larger integers than the Number
// Type can hold
// Additionally, JS has dynamic typing, that is we don't have to specify the dattype
// stored in a variable, it is determined automatically. NOTE : the value has a type
// not the variable. Cause of dynamic typing, we can assign a new value with a
// different datatype to the same variable without a problem
// 'typeof' is an operator used to show the type of a value 
console.log(firstName = 20)
console.log(typeof firstName)
true;
console.log(true)
//  dynamic typing : this simply means we can change the type of value that a variable
//  holds. E.G. below
let koladeHasMoney = true;
console.log(typeof koladeHasMoney)
// this below is the dynamic typing, when doing it we don't use 'let' again, we just 
// assign it
koladeHasMoney = 100;
console.log(typeof koladeHasMoney)
// example of undefined
let year;
console.log(year)
console.log(typeof year)
// this below, is an error that exists in the 'typeof' operator
console.log(typeof null)
// when we use the console, the 'typeof' shows object, which is wrong, cause the 
// datatype 'null' isn't an object, it should'vereturned undefined
//                  ADVANCED VALUE TYPES(TYPES CONVERSION AND COERCION)
// E.G. converting from string to boolean, and from booleand to number are things
// that we do a lot in programming.
// Type Conversion: this is when we manually convert from one type to another
// Type Coercion: this is when JS automatically converts it behind the scenes
// for us


//          TYPE CONVERSION
const inputYear = '1991';
console.log(inputYear + 18);
// this gives us (199118) because it's a string, to do calculation with it, we
// would need to change the string to a number.
// Changing to a number, is done below
console.log(Number(inputYear));
// note: the original value is not converted to a number, using the number function
// would only give us a converted version
console.log(Number(inputYear) + 18);
// if we try the code below
console.log(Number('Jonas'));
// we would get NaN which is Not a Number. This(NaN) is what happens an operation
// that involves numbers fail to produce new numbers. NaN means invalid Number
console.log(typeof NaN); // this brings 'number' cause NaN is still a number somehow
// just an invalid one.
// we can only convert to number, string or boolean. The boolean conversion,
// is different though.
// CONVERSION FOR BOOLEANS is quite different, we first have to know what truthy 
// falsy values are.
// Falsy values are values that are not exactly false, but will become false when we 
// try to convert them into a boolean. And there are only 5 falsy values in JS:
// i.e. (0, '', undefined , null and NaN). Everything else will be converted into
// a truthy value(true) E.G. below
console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean('')); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(null)); // false
console.log(Boolean({})); // true
console.log(Boolean(1222)); // true
console.log(Boolean('monkey')); // true


//              TYPE COERCION
// This happens when an operator is dealing with 2 values that have different types.
// JS then converts one of the values to match the other value, so that the 
// operation can be executed.
console.log('i am ' + 23 + ' years old'); // this works because of type coercicion
// when we have numbers and strings, the number is converted into a string.
console.log('23' - '10' - 3);
// the minus(-) operator does the opposite and changes the string into a number
console.log('23' + '10' + 3)
// this changes the strings to numbers and then concatenates them
console.log('23' * '2');
// this also coerces, cause strings can't be multiplied, they have to be changed 
// numbers. Same also goes for division.
let n = '1' + 1; // the (+) just concatenates them(join)
n = n - 1; // the (-) actually does the arithmetic operation
console.log(n);
console.log(2 + 3 + 4 + '5'); // the one's that are'nt strings are added normally
// and then joined with the string
console.log(2 + 3 + '4' + 5);
console.log(10 + 2 + 3 + '3' + 4 + 4 + 5 + 5);

