const firstName = 'Idowu';
const job = 'programmer';
const birthYear = 2006;
const year = 2037;
// we're using concatenation, and assigning it to a variable
// although the text has a number, javascript will convert this number to letters, 
// so it can concatonate them
const Idowu = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job;
console.log(Idowu)
// the spacing within a concatonation is dependent on what's inside the string
// and not the spacing within the '+' sign
//      As we can see this is stressful, that's why with ES6 we have template 
// literals E.G.
const IdowuNew = `I'm ${firstName} , ${year - birthYear} years old ${job} `;
// the backtick (``) tells JS that we're using template literals, the synax is
// (`string string ${variable}`;)
console.log(IdowuNew);
// we can also use it for any regular string
console.log(`just a regular string....`);
// we can also use it to create multi-line strings
console.log(' Old way \n\ of creating \n\ multi-line strings')
console.log(`New way
of creating 
multi-line string
with backticks`)

