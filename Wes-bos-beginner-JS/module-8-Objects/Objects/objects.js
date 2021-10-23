// We could create objects like below instead of using the literal syntax

// const person = new Object({
//   age: 100,
//   name: "Koko",
// });

// console.log(person);

// const age = 100;
// const person = new Object({
//   age: age,
//   name: "Koko",
// });

// console.log(person);

// We could just specify the age in the Object method without specifying value as shown below

// const age = 100;
// const person = new Object({
//   age,
//   name: "Koko",
// });

// // We could create a new property like so
// person.job = "Data Engineer";

// console.log(person);

// // The person Object cannot be changed because it is binded/ referenced to a certain space available in memory
// // This person Object and its content can be made not to be change by using the freeze method
// const personFrozen = Object.freeze(person);

// console.log("Before changing the propery");
// console.log(personFrozen);

// // Change the age property
// personFrozen.age = 50;
// console.log("After changing the property");
// console.log(personFrozen);

//
// const age = 100;
// const wes = new Object({
//   name: "wes",
//   propertyToCheck: "NEVER",
//   age,
//   "cool-dude": true,
//   "really cool": false,
//   777: true,
//   dog: "snickers",
//   clothing: {
//     shirts: 10,
//     pants: 2,
//   },
//   sayHello: function (greeting = "Hey") {
//     return `${greeting} ${this.name}`;
//   },
// });

// console.log(wes.age);
// const propertyToCheck = prompt("What do you wanna check?");
// console.log(propertyToCheck);
// // The square bracket approach helps us to take in values from a variable
// // Meanwhile, "dot" approach doesnt allow us to take in values from variables
// // but rather helps us only retrive properties in the Object.
// console.log(wes[propertyToCheck]);
// console.log("Using the dot method only retrives properties in objects");
// console.log(wes.propertyToCheck);

// console.log(delete wes.dog);

// console.log(wes.sayHello());

// Assigning a variable to an assigned variable(with values such as string, numbers)
// let name1 = "wes";
// let name2 = name1;
// console.log(name1, name2);
// name2 = "westopher";
// console.log(name1, name2);

// const person1 = {
//   first: "wes",
//   last: "bos",
// };
// const person2 = {
//   first: "wes",
//   last: "bos",
// };

// // When we assign a Object to a variable, what we are doing is referencing the Object;
// // Referencing simply means just pointing the variable to the Object
// const person3 = person1;
// person3.first = "Larry";
// console.log(person3.first);
// console.log(person1.first);
// console.log(person1);
// console.log(person3);

// Since using "=" to assign Object is gonna give a reference which allows for
// data to leak through the variable and object, It will be important to know of ways
// we can have copies instead of reference.( we use Spread operator and Object.assign())
// Both these methods provide shallow copies and not deep copies ( What this means is
// Its only effective for non-nested objects/ arrays/ maps and so on)

// Tp get copies of nested Objects/ arrays/ and so on, we use a utility library called
// LODASH.

// const person1 = {
//   first: "wes",
//   last: "bos",
//   clothing: {
//     shirts: 10,
//     pants: 2,
//   },
// };

// const person3 = _.cloneDeep(person1);
// person3.first = "Larry";
// person3.clothing.shirts = 100;
// console.log(person1);
// console.log(person3);

const meatInventory = {
  bacon: 2,
  sausage: 3,
};
const veggieInventory = {
  lettuce: 5,
  tomatoes: 3,
};

const inventory = {
  ...meatInventory,
  ...veggieInventory,
};

//
name1 = "wes";
function doStuff(data) {
  data = "something else";
  console.log(data);
}
doStuff(name1);

function doStuff2(data) {
  data.tomatoes = 1000000000;
  console.log(data);
}
doStuff2(inventory);
