function fizzBuzz(x, y) {
  for (let i = x; i < y; i++) {
    if (i % 15 === 0) {
      console.log(i, "FizzBuzz");
    } else if (i % 5 === 0) {
      console.log(i, "Buzz");
    } else if (i % 3 === 0) {
      console.log(i, "Fizz");
    }
  }
}
fizzBuzz(30, 99);
