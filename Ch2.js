// Ch 2. Program Structure
// =======================

// Bindings
// --------
// A binding is a variable :\
let caught = 5 * 5;
console.log(caught*caught);     // 625 (25 * 25)
caught = caught / 5;            // 5

// The <const> keyword is used for a constant - points at the same value for as 
// long as it lives.

// Binding Names
// -------------
// Names cannot start with a digit, and you cannot use keywords.

// The Environment
// ---------------
// The environment is the collection of bindings and their values as they exist at
// any given time.

// Functions
// ---------
// A lot of values provided in the default environment have the type _function_.
// For example:
prompt("Enter passcode");

// The console.log function
// ------------------------
// I use this all the time

// Control Flow
// ------------
// When a program contains more than one statement, the statements are executed
// top to bottom.
// For example:
let theNumber = Number(prompt("Pick a number"));
console.log("Your number is the square root of " + theNumber * theNumber);

// Conditional Execution
// ---------------------
// The <if> keyword allows for conditional execution. For example:
let theNumber = Number(prompt("Pick a number"));
if (!Number.isNaN(theNumber)) {
    console.log("Your number is the square root of " + theNumber * theNumber);
} else {
    console.log("That was not a number.")
}

// You can also chain if statements together
let num = Number(prompt("Pick a Number"));

if (num < 10) {
    console.log("small");
} else if (num < 100) {
    console.log("Medium");
} else {
    console.log("Large");
}

// While and Do Loops
// ------------------
// Looping alows going to back to some point in the program where we were begore and 
// repeat it with our current program state. For example:

let number = 0;
while (number <= 12) {
    console.log(number);
    number = number + 2;
}

// A <do> loop differs from a while loop in that it executes the code at least once.
let yourName;
do {
    yourName = prompt("Who are you?");
} while (!yourName);
console.log(yourName);

// For Loops
// ---------
// For loops are similar to while loops except they group together all of the statements 
// within the structure of the for loop

for (let number = 0; number <= 12; number++) {
    console.log(number);
}

// Breaking Out of a Loop
// ----------------------
// The break statement immediately jumps out of an enclosing loop. For example:
for (let current = 20; ;current = current + 1) {
    if (current % 7 == 0) {
        console.log(current);
        break;
    }
}

// The above code will produce 21 because 21 is the next number divisible by 7

// Updating Bindings Succinctly
// ----------------------------
// Instead uof updating a binding like current = current + 1, you can just use
// counter += 1. For example:
for (let number=0; number <= 12; number += 1) {
    console.log(number)
}

// Dispatching on a value with Switch
// ----------------------------------
// Rather than nesting a bunch of <if> statements, you can use <switch>:
switch(prompt("What is the weather like?")) {
    case "rainy":
        console.log("Remember to bring an umbrella");
        break;
    case "sunny":
        console.log("Dress lightly");
        break;
    case "cloudy":
        console.log("Go outside!");
        break;
    default:
        console.log("Unknown weather type!");
        break;
}

// Exercises:
// ==========

// Looping Triangle
// ----------------
// Create the following output:
// *
// **
// ***
// ****
// *****
// ******
// *******

let x="";
for (let i=0; i<=7; i++) {
    x+='#';
    console.log(x);
}

// FizzBuzz
// --------
/*
Write a program that uses console.log to print all the numbers from 1 to 100, 
with two exceptions. For numbers divisible by 3, print "Fizz" instead of the 
number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
*/

for (let i=0; i<=100; i++) {
    if (i % 5 == 0) {
        console.log('Buzz');
    } else if (i % 3 == 0) {
        console.log('Fizz');
    } else {
        console.log(i);
    }
}

/*
When you have that working, modify your program to print "FizzBuzz" for numbers 
that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers 
divisible by only one of those).
*/ 

for (let i=0; i<=100; i++) {
    if (i % 5 ==0 && i % 3 == 0) {
        console.log('FizzBuzz')
    } else if (i % 5 == 0) {
        console.log('Buzz');
    } else if (i % 3 == 0) {
        console.log('Fizz');
    } else {
        console.log(i);
    }
}

// ChessBoard
// ----------
/* 
Write a program that creates a string that represents an 8×8 grid, using 
newline characters to separate lines. At each position of the grid there is 
either a space or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #
*/

let x="";
x=""
for (let i=0; i<=8; i++) {
    for (let j=0; j <= 8; j++) {
        if ( (j+i) % 2 == 0) {
            x += "#";
        } else {
            x += " ";
        }
    }
    x+='\n';
}
console.log(x);
