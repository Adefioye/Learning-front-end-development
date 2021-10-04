// console.log("It's working!")

// Running a function before it is defined, will it work? Yes it does
// because, sayHi is a function declaration.

// sayHi();

// function sayHi() {
//   console.log('hey!');
// }

// Variable hoisting;
// Variable declaration is hoisted, However, the setting of the value
// is not

// Variable "age" is logged as undefined in the console
// console.log(age);
// var age = 10;

// Variable "cool" shows Reference error
// console.log(cool);
// var age = 10;

// It is important to note that "var" is the only one that returns
// undefined. While "const" and "let" return Reference error;

console.log(age);
const age = 10;