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

// let department = { name: "Entertainment", fulltime: true };

// let musicDepartment = Object.create(department, {});
// musicDepartment.employees = 200;
// musicDepartment.remote = true;
// delete department.name;
// console.log(musicDepartment);

// Trying to create a class player
// class Player {
//   constructor(energy, power, level) {
//     this.energy = energy;
//     this.power = power;
//     this.level = level;
//   }
//   powerControl() {
//     console.log(`Remaining power left is ${this.power - this.energy}`);
//   }
// }

// const ryu = new Player(200, 500, 1);

// ryu.powerControl();

// const chunLi = Object.create(ryu);
// console.log(chunLi);

// Iterate an object using the for-in statement
// let coffee = {
//   roast: "medium",
//   blend: "Ethopian",
//   servings: 100,
//   morningMsg: function () {
//     console.log(`Ooh! The smell of an ${this.blend} blend in the mornings`);
//   },
// };

// for (key in coffee) {
//   console.log(coffee[key]);
// }

// To get object properties use Object.keys
// console.log(Object.keys(coffee));

// // To get Object properties
// console.log(Object.values(coffee));

// let coffee = {
//   roast: ["light", "medium", "dark", "extra dark"],
//   blend: ["Ethopian", "Columbian", "American"],
//   servings: ["small", "medium", "large"],
//   morningMsg: function () {
//     console.log(`Ooh! The smell of an ${this.blend} blend in the mornings`);
//   },
// };

// // To get key-value pairs of Object
// console.log(Object.entries(coffee));

// To check if an object is empty
// const ob = {};
// console.log(
//   `Is ob an object: ${
//     Object.keys(ob).length === 0 && ob.constructor === Object
//   }`
// );

// function isObjectEmpty(object) {
//   for (let key in object) {
//     if (object.hasOwnProperty(key)) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(`Is ob an empty object: ${isObjectEmpty(ob)}`);

// IMPLICIT BINDING FOR "this" keyword
// ("use strict");
// function globalContext() {
//   console.log(this);
// }

// globalContext();

// IMPLICIT BINDING FOR "this" keyword
// let Tanukichi = {
//   airlines: "Dodo",
//   miles: 1000,
//   greeting: function () {
//     console.log(`Hello, you have ${this.miles} miles`);
//   },
// };
// Tanukichi.greeting(); // "Hello, you have 1000 miles"

// var miles = 50;
// let tanukichiGreeting = Tanukichi.greeting;
// tanukichiGreeting();

// new BINDING,

// function tanukichi(miles) {
//   this.airlines = "Dodo";
//   this.miles = miles;
//   this.greeting = function () {
//     console.log(`Hello, you have ${this.miles} miles`);
//   };
// }
// let tom = new tanukichi(50);
// tom.greeting();

// EXPLICIT BINDING
// function greeting(points, bells) {
//   console.log(
//     `You are at the ${this.level} level in the game. You have ${points} points and ${bells} bells`
//   );
// }
// let merengue = { level: "Intermediate" };

// // The call method sets the next parent object to the object argument passed
// // to it as argument
// greeting.call(merengue, 500, 1000);

// USig the apply method
// function greeting(message, mood) {
//   console.log(`${message}You are at the ${this.level} level in the game. You have ${this.points} and ${this.bells} bells.
//     Hopefully you're in a ${mood} mood`);
// }

// let merengue = {
//   level: "Intermediate",
//   points: 50000,
//   bells: 100000,
// };

// greeting.apply(merengue, ["Hello there,", "happy"]);

// Using BIND METHOD
// function greeting(points, bells) {
//   console.log(
//     `You are at the ${this.level} level in the game. You have ${points} points and ${bells} bells`
//   );
// }

// let merengue = {
//   level: "Intermediate",
// };

// // The bind method typically create a new function
// let userMsg = greeting.bind(merengue, 5000, 100000);
// userMsg();

// let HR = {
//   company: "Zimpak Software",
//   hiring: false,
//   employees: 100,
//   message: function () {
//     if (this.employees <= 100) {
//       console.log(
//         `Is ${this.company} with ${this.employees} employees hiring: ${this.hiring} `
//       );
//     } else {
//       console.log(`${this.company} is not hiring`);
//     }
//   },
// };

// HR.message();

// class Company {
//   constructor(name, hiring, employees) {
//     this.company = name;
//     this.hiring = hiring;
//     this.employees = employees;
//   }
//   message() {
//     if (this.employees >= 400) {
//       console.log(`${this.company} is currently not hiring`);
//     } else {
//       console.log(`${this.company} is currently hiring`);
//     }
//   }
// }

// let moogle = new Company("Koko limited", true, 200);
// moogle.message();

// let newObject = {
//   name: "Pataya",
// };

// function restaurant(stars, cuisine) {
//   console.log(
//     `Welcome to ${this.name}. We have ${stars} stars and serve ${cuisine} cuisine`
//   );
// }

// restaurant.call(newObject, 4, "Thai");
// let bretLee = { name: "Bret Lee", points: 400 };

// function leagueMessage() {
//   console.log(
//     `${this.name} is playing in miniLeague with ${this.points} points for this Summer`
//   );
// }

// leagueMessage.apply(bretLee);

function gymMembership(fees) {
  console.log(`${this.name} has ${this.total - fees} membership fees to pay`);
}

const sukhi = {
  name: "sukhi",
  total: 1000,
};

const getFee = gymMembership.bind(sukhi, 100);
getFee();
