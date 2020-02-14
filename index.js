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
// 2-11-2020
let kitten = "Fuzzy";
const cat = x => {
  console.log(kitten);
};
cat();
*/

//2-12-2020
// // TODO: using the function expressions below, refactor them into function declarations
// function greet () {
//   console.log("Hello!");
// }

// function threeModTwo () {
//   console.log(3 % 2);
// }

// let age = 18;
// function checkDrivingAge () {
//   if (age >= 16) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }

// greet();
// threeModTwo();
// checkDrivingAge(age);
// greet;

// print the function below
// function myNumberFunction() {
//   let num = 2 ** 2;
//   num = num + 3;
//   num = num % 4;
//   num = num * 14;
//   console.log(num);
// }

// // now, invoke the myNumberFunction function
// myNumberFunction();

// // print just the function of console.log (no invocation)
// console.log(myNumberFunction);

// // ? what does the function below return?
// function myNumberFunction() {
//   let num = 2 ** 2;
//   num = num + 3;
//   num = num % 4;
//   num = num * 14;
//   return num;
// }

// change the function above to return a value

// // Short Circuiting
// // ! the console.log will not print
// function shortCircuitFunction() {
//   return "Zap! - Short Circuited!";
//   console.log(
//     "This will never print because it is after the return statement."
//   );
// }

// // ? will the following function short circuit?
// let height = 50;
// function checkCircusRides() {
//   if (height < 48) {
//     return "Take a ride on the carousel!";
//   }
//   if (height < 60) {
//     return "Try the bumper cars!";
//   }
//   return "Enjoy the roller coaster!";
// }
// console.log(checkCircusRides(height));
// // change the function above to use short circuiting
// let x = "Dogs";
// function funky(x, y = 2, ...args) {
//   console.log(x);
//   console.log(y);
//   console.log(args);
//   return x + y;
// }
// // print each named parameter,
// // then return the parameters added together

// // invoke the function and pass in two numbers
// funky(1, 2, 3, 4, 5, 6, 7);
// console.log(x);

// wrap the code below in a function called "addNumbersFrom1To100" and return the total
// ! do not use console.log inside your function

// function getTotal() {
//   let total = 0;
//   for (let i = 1; i <= 100; i++) {
//     total += i;
//   }
//   return total;
// }
// // // invoke the function and console.log its value
// console.log(getTotal());

// // try to print the variable "total"
// // ? what do you expect ?

// // examine the code below,
// // // ? which console.log statement will not print when you invoke the parentAndChildScope function ?
// function childScope(param) {
//   const childVariable = "I am in the child's scope";
//   console.log("Child Scope, Parent Variable:", param);
//   console.log("Child Scope, Child Variable:", childVariable);
// }

// function parentAndChildScope() {
//   const parentVariable = "I am in the parent's scope";
//   childScope(parentVariable);
//   console.log("Parent Scope, Parent Variable:", parentVariable);
//   console.log("Parent Scope, Child Variable:", childVariable);
// }
// parentAndChildScope();

// refactor this messy looking function into pure functions
function rentCar(name, age, car) {
  if (age >= 25) {
    console.log(
      `Thank you for your reservation ${name}. We have a ${car} available for you, and it is quite affordable.`
    );
  } else if (age >= 18) {
    console.log(
      `Thank you for your reservation ${name}. We have a ${car} available for you, but it is quite expensive.`
    );
  } else {
    console.log(`Sorry, ${name}. You are not old enough to rent a car.`);
  }
}
