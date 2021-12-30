// var HOISTING
// console.log(x); // undefined var x = 100;
// var x = 100;
// console.log(x); // 100
/* Even though variable x is declared before console.log(x), the value logged undefined
because variable and function declaration are hoisted at the top of every file(global scope)
before execution or compilation of code.
*/

// let and const HOISTING
// console.log(city);
// console.log(apple);
// let city = "Toronto";
// const apple = "Granny smith";
/*
Even though "let" and "const" are being hoisted like "var", they cannot be accessed before they are declared
this is because "let" and "const" variables are hoisted with "uninitialized" as opposed to "undefined"
for "var"
*/

// Create randomNumber object with an object constructor function
// const randomNumber = new Object();

// // Attach properties to the randomNumber object
// randomNumber.luckydraw = true;
// randomNumber.value = function () {
//   console.log(Math.floor(Math.random() * -10));
// };

// console.log(randomNumber.value());

// Creating a user-defined constructor function
// function Dessert(name, calories, flavor, helpings) {
//   this.name = name;
//   this.calories = calories;
//   this.flavor = flavor;
//   this.helpings = helpings;
//   this.totalCal = function () {
//     console.log(this.calories * this.helpings);
//   };
// }

// const cake = new Dessert("Bamboozle", 1000, "chocolate", 3.5);
// console.log(cake.totalCal());

// Using Object.create() to inherit object properties

let department = { name: "Entertainment", fulltime: true };

let musicDepartment = Object.create(department, {});
musicDepartment.employees = 200;
musicDepartment.remote = true;
delete department.name;
console.log(musicDepartment);
