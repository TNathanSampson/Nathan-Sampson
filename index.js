/*
const myName = "Nathan";
let numOfYears = 0.2;

//let allows you to re-assign the variable with new data
numOfYears = 0.3;
numOfYears = "three tenths";

console.log(myName);
// this is a comment
// '.' notation is used to access KEYS within an OBJECT.
// 'log' is a method.

console.log("My name is " + myName + ".");

//template literals use Interpolation
console.log(
  `My name is ${myName}, I have ${numOfYears} years experience with JavaScript.`
);
*/

// const x = 3;
// const y = true;
// console.log(x);
// console.log(y);

//null represents the deliberate assignment of a "nothing" value.

// create a variable called "name" that references a string
const name = "Nathan";
// create a variable called "favoriteSong" that references a string
let favoriteSong = "When the Levee Breaks";
// create a variable called "wage" that references a number
let wage = 17;
// create a variable called "age" that references a number
let age = 35;
// create a variable called "onlyChild" that references a boolean
let onlyChild = false;
// create a variable called "satisfied" that references a boolean
let satisfied = false;
// create a variable called "favoriteThing" that references ANY primitive value
let favoriteThing = 3;
// print the data type of "favoriteThing"
console.log(favoriteThing);

// ! You heard a new song that became your favorite.
// Reassign the variable "favoriteSong"
favoriteSong = "In My Time of Dying";
// ! You no longer like the type of data stored in "favoriteThing"
// Reassign "favoriteThing" to a different primitive data type and print its type
favoriteThing = "Son";
// ! Happy Birthday!
// Reassign "age" to a new value
age = 36;
// ! You got a big raise at work.
// Reassign "wage" to a new value
wage = 20;
// ! Your raise changed your job satisfaction.
// Assign "satisfied" to true
satisfied = true;
// use "console.log()" and "+" to print a sentence that includes two variables
console.log(`My name is ${name}, and my favorite song is "${favoriteSong}".`);
