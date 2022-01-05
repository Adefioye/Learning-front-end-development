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

// function gymMembership(fees) {
//   console.log(`${this.name} has ${this.total - fees} membership fees to pay`);
// }

// const sukhi = {
//   name: "sukhi",
//   total: 1000,
// };
// const getFee = gymMembership.bind(sukhi, 100);
// getFee();

// PROTOTYPICAL INHERITANCE

// To get prototype of built-in object type
// const car = {};
// console.log(Object.getPrototypeOf(car));

// let auto = { drive: true, wheels: 4, gears: "automatic" };

// const car = Object.create(auto);
// console.log(Object.getPrototypeOf(car)); // This logs out the auto object

// const book = {};
// console.log(Object.getPrototypeOf(book));

// let pizza = { base: "wheat", sauce: "tomato", cheese: "parmesan" };
// const cheesePizza = Object.create(pizza);
// console.log(Object.getPrototypeOf(cheesePizza));

// let animal = { legs: 4, eat: true, nap: true };
// let dog = { tail: true };
// // To make animal the "object prototype of dog"
// Object.setPrototypeOf(dog, animal);
// let boston_terrier = { breed: "Boston Terrier" };
// Object.setPrototypeOf(boston_terrier, dog);
// console.log(boston_terrier);

// const book = {
//   educational: true,
//   diagrams: true,
//   author: "J.K",
//   discount: 0,
//   sale: function () {
//     if (this.educational) {
//       this.discount = 0.5;
//     }
//   },
// };

// const scienceFictionBook = new Object();
// scienceFictionBook.educational = false;
// Object.setPrototypeOf(scienceFictionBook, book);
// console.log(scienceFictionBook);

// function SuperPower(invisible, talk, bonus) {
//   this.invisible = true;
//   this.talk = "deeble";
//   this.bonus = 1000;
//   this.dialogue = function () {
//     console.log(`My super talk is ${this.talk}`);
//   };
// }

// const invisibleGirl = new SuperPower();
// console.log(Object.getPrototypeOf(invisibleGirl));

// function SuperPower(talk, bonus) {
//   this.talk = "deeble";
//   this.bonus = 1000;
//   this.dialogue = function () {
//     console.log(`My super talk is ${this.talk}`);
//   };
// }

// function Invisible(talk) {
//   SuperPower.call(this);
//   this.invisible = "invisible";
// }

// function Teleport(talk) {
//   SuperPower.call(this);
//   this.power = "teleport";
// }

// let invisibleGirl = new Invisible();
// let teleportDog = new Teleport();
// console.log(Object.getPrototypeOf(teleportDog));

// function SchoolFranchise(accredited, teachers, online) {
//   this.accredited = true;
//   this.teachers = false;
//   this.online = true;
// }

// function JuniorHigh(name, type) {
//   SchoolFranchise.call(this);
//   this.name = name;
//   this.type = "Junior High";
// }

// let huronPublic = new JuniorHigh("Huron");
// console.log(huronPublic);

// class Company {
//   constructor(name, funding, employees) {
//     this.name = name;
//     this.funding = funding;
//     this.employees = employees;
//   }
// }

// let zimbaPay = new Company("Zimba Pay", 1000000, 50);
// console.log(Object.getPrototypeOf(zimbaPay));

// INSTANCE METHOD
// class Person {
//   constructor(name, age, hobby) {
//     this.name = name;
//     this.age = age;
//     this.hobby = hobby;
//   }
//   personGreeting() {
//     console.log(`Hi I am ${this.name} and I like ${this.hobby}`);
//   }
// }

// let person1 = new Person("Rover", 10, "Coding");
// console.log(person1.name);
// person1.personGreeting();

// class Company {
//   constructor(name, funding, employees) {
//     this.name = name;
//     this.funding = funding;
//     this.employees = employees;
//   }

//   equity() {
//     console.log(0.1 * this.funding);
//   }
// }
// const purpleMoon = new Company("Purple moon", 5000000, 50);
// const equity = purpleMoon.equity();
// console.log(equity);

// PUBLIC INSTANCE FIELDS
// class Person {
//   name = "";
//   age = 10;
//   hobby = "";
//   constructor() {}
// }

// console.log(Person.age);

// let person1 = new Person();

// person1.age = 30;
// console.log(Person.age);

// PRIVATE INSTANCE FIELDS
// class InternalDetails {
//   #grossProfit;
//   #netProfit;
//   #tax;
//   #expenses;
//   constructor(grossProfit, expenses, tax, netProfit) {
//     this.#grossProfit = grossProfit;
//     this.#expenses = expenses;
//     this.#tax = tax;
//   }

//   getNet() {
//     this.#netProfit = this.#grossProfit - this.#expenses * this.#tax;
//     return this.#netProfit;
//   }
// }

// let mooCompany = new InternalDetails(30, 1, 1, 0);
// console.log(mooCompany.getNet());

//
// class WeddingPlanner {
//   static llc = "Wedding Gee LLC";
//   static taxNumber = "319000";
//   #company = "Wedding Gee";
//   #office = "101 Plum Street, Chicago";
//   #planner = "Keanna Rose";
//   clientName;
//   clientBudget;

//   constructor(clientName, clientBudget) {
//     this.clientName = clientName;
//     this.clientBudget = clientBudget;
//   }

//   welcomeMessage() {
//     console.log(
//       `Hi, ${this.clientName}! Welcome to ${this.#company}, I am your planner ${
//         this.#planner
//       }. Please confirm that your budget is ${this.clientBudget}`
//     );
//   }
// }

// let missSpadina = new WeddingPlanner("J. Spadina", 50000);
// missSpadina.welcomeMessage();

// console.log(Object.getPrototypeOf(missSpadina));

// class DonutGiveAway {
//   static #max_instances = 5;
//   static #instances = 0;
//   flavor;
//   constructor(flavor) {
//     DonutGiveAway.#instances++;
//     if (DonutGiveAway.#instances > DonutGiveAway.#max_instances) {
//       throw new Error("Unable to create a new donut instance");
//     } else {
//       this.flavor = flavor;
//     }
//   }
// }

// let donut1 = new DonutGiveAway("Java Javascript");
// let donut2 = new DonutGiveAway("Snappy Semicolon");
// console.log(donut1);
// console.log(donut2);
// console.log(Object.keys(donut1));
// console.log(Object.keys(donut2));

// INHERITANCE OF A CLASS
// class Dog {
//   constructor(legs, tail) {
//     this.legs = 4;
//     this.tail = 1;
//   }
// }

// class Breed extends Dog {
//   breed = "Boston Terrier";
// }

// const rocko = new Breed();

// console.log(rocko);
// console.log(Object.keys(rocko));
// console.log(Object.entries(rocko));

//  USING SUPER KEYWORD
// class Company {
//   constructor(brand) {
//     this.brand = brand;
//   }
// }

// class Game extends Company {
//   constructor(brand, name) {
//     super(brand);
//     this.name = name;
//   }
//   show() {
//     console.log(`Game is by ${this.brand} and the name is ${this.name}`);
//   }
// }
// const favoriteGame = new Game("Nintendo", "Animal Crossing");
// console.log(favoriteGame);
// favoriteGame.show();

// class Dog {
//   constructor(legs, tail) {
//     this.legs = 4;
//     this.tail = 1;
//   }
// }

// class Breed extends Dog {
//   constructor(breed) {
//     super();
//     this.breed = breed;
//   }
// }

// const doggie = new Breed("Boston Berrier");
// console.log(doggie);

// class MusicLabel {
//   constructor(labelName) {
//     this.labelName = "Avocado Label";
//   }

//   static LabelMotto() {
//     console.log("Hello and Welcome!");
//   }
// }

// class Jazz extends MusicLabel {
//   constructor(artist, labelName, genre) {
//     super(labelName);
//     this.artist = artist;
//     this.genre = "Jazz";
//   }
// }

// const richieZoo = new Jazz("Richie Zoo");
// console.log(richieZoo);

// class User {
//   name;
//   constructor(name) {
//     this.name = name;
//   }
//   hello() {
//     console.log(`Hello, ${this.name}`);
//   }
// }

// const user1 = new User("Zulezoo");
// const user2 = {};
// console.log(user1 instanceof User);
// console.log(user2 instanceof User);

// class User {
//   name;
//   constructor(name) {
//     this.name = name;
//   }
//   hello() {
//     console.log(`Hello, ${this.name}`);
//   }
// }

// class Admin extends User {
//   accesslevel;
//   constructor(name, accesslevel) {
//     super(name);
//     this.accesslevel = accesslevel;
//   }
// }

// const employee = new Admin("Merengue", 1);

// console.log(employee instanceof Admin);
// console.log(employee instanceof User);

// // Using the constructor property to affirm the specific class used for instantiation of the object
// console.log(employee.constructor);
// console.log(employee.constructor === Admin);
// console.log(employee.constructor === User);

// let donut = {
//   units: 100,
//   flavors: ["strawberry", "oreo", "java"],
//   price: 5.99,
//   // getDonutFlavor: function () {
//   //   flavorList = this.flavors;
//   //   for (let flavor of flavorList) {
//   //     console.log(flavor);
//   //   }
//   // },
//   get getDonutFlavor() {
//     flavorList = this.flavors;
//     for (let flavor of flavorList) {
//       console.log(flavor);
//     }
//   },
//   // setDonutFlavor: function (params) {
//   //   this.flavors.push(params);
//   // },

//   set setDonutFlavor(params) {
//     this.flavors.push(params);
//   },
// };

// // donut.getDonutFlavor();
// // donut.setDonutFlavor("Chocolate");
// donut.setDonutFlavor = "Chocolate";
// console.log(donut.flavors);
// donut.getDonutFlavor;

// Using Object.defineProperty
// const gamingPC = {};
// Object.defineProperty(gamingPC, "graphicsCard", {
//   configurable: false,
//   enumerable: false,
//   writable: true,
//   value: "RTX2060",
// });

// console.log(gamingPC.graphicsCard);
// // Make a setter method
// Object.defineProperty(gamingPC, "newCard", {
//   set: function (cardName) {
//     this.graphicsCard = cardName;
//   },
// });

// Object.defineProperty(gamingPC, "getCard", {
//   get: function () {
//     console.log(this.graphicsCard);
//   },
// });

// gamingPC.newCard = "GeForce RTX 2070 Super";
// console.log(gamingPC.graphicsCard);
// gamingPC.getCard;

// let console1 = {
//   one: "Nintendo Switch",
//   two: "XBox",
//   three: "PlayStation",
//   four: "Gameboy",
// };
// let console2 = {};

// for (key in console1) {
//   console2[key] = console1[key];
// }

// console.log(console2);

// console2.one = "Sega";

// console.log(console1);

// const city = {
//   name: "Toronto",
//   coordinates: "43.6532° N, 79.3832° W",
//   streets: {
//     North: "Bathurst",
//     South: "Queens",
//     West: "Bathurst",
//     East: "Spadina",
//   },
//   population: 3190000,
// };

// const cityClone = { ...city };

// cityClone.streets.North = "St.George";
// cityClone.name = "Toronto clone";
// console.log(city);
// console.log(cityClone);

// let a = {};
// let b = {};
// console.log(a === b);
