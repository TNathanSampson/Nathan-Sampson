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

const me = {
  pets: {
    dog: "Arya",
    cat: "Jessie"
  }
};

me.name = "Nathan";
me.age = 35;

console.log(me);

const someone = {
  name: "dhanav"
};

someone.name = "jim";
someone.age = 24;

let keyFinder = "pets";

console.log(someone);
console.log(me["name"]);
console.log(me[keyFinder].dog);

const x = 3;
const y = 3;
const z = true;

console.log((x === y) === z);

const guy = {
  name: "Nathan";
}
const otherGuy = {
  name: "Nathan";
}
console.log(guy === otherGuy);
//Primitives are Pass by (meaning compare by) Value, Objects are Pass by "reference", meaning by their location in memory (pointer)
const myArray = [1, 2, 3];
console.log(myArray);
// access the 1st item in the Array
console.log(myArray[0]);
// access the last item in the Array
console.log(myArray[2]);
// print the length of the Array
console.log("length: ", myArray.length);
// use the length property to access the last item in the Array
console.log(myArray[myArray.length - 1]);
// with for...of, loop over the Array, modify the value and add to a different Array
console.log("For Loop Question: ");

for (const item of myArray) {
  console.log(item + 10);
}
const myArr2 = [];

for (const item of myArray) {
  myArr2.push(item + 3);
}
console.log(myArr2);
*/
let kitten = "Fuzzy";
const cat = x => {
  console.log(kitten);
};
cat();
