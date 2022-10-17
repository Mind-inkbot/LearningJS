//          14/10/2022
// This is an alternative way of writing a complicated if/else statement, when 
// all we want to do is compare one value to multiple different options.
// it's CAP sensitive


const day = `Monday`;
switch (day) {
    case `Monday`: // this means day === monday, and if it'd true, then the two  
        console.log(`Plan course structure`); // code blocks would be executed
        console.log(`Go to coffee meetup`);
        break; // if the 'breaks' aren't added, the code keeps on processing, till
    case `tuesday`: // gets to a break
        console.log(`prepare theory videos`);
        break;
    case `Wednesday`:
    case `Thursday`: // whatever is written after the two codes, would affect both
        console.log(`Write code examples`);
        break;
    case `Friday`:
        console.log(`Record videos`);
        break;
    case `Saturday`:
    case `Sunday`:
        console.log(`Enjoy the weekend`);
        break;
    default:
        console.log(`not a valid day`);
}

// writing the same code with an if/else statement
const _day = `Sunda`;
if (_day === `Monday`) {
    console.log(`Plan course structure`);
    console.log(`Go to coffee meetup`);
} else if (_day === `Tuesday`) {
    console.log(`prepare theory videos`);
} else if (_day === `Wednesday` || _day === `Thursday`) {
    console.log(`Write code examples`);
} else if (_day === `Friday`) {
    console.log(`Record videos`);
} else if (_day === `Saturday` || _day === `Sunday`) {
    console.log(`Enjoy the weekend`);
} else {
    console.log(`not a valid day`);
}


