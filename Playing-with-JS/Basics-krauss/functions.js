// function game(x, y) {
//   console.log(params.length);
// }
// game("wow", "fokasibe");
// function oddNumber(x) {
//   if (x % 2 !== 0) {
//     console.log(`${x} is an odd number`);
//   } else {
//     console.log(`${x} is an not an odd number`);
//   }
// }
// oddNumber(3);
// oddNumber(4);
// oddNumber(-5);
// oddNumber(-8);

// function findPrime(x) {
//   let num = 0;
//   //check if the x is divisible by itself and 1
//   for (i = 1; i <= x; i++) {
//     if (x % i == 0) {
//       //increment value of num
//       num++;
//     }
//   }
//   if (num == 2) {
//     console.log(x + " is a Prime number");
//   } else {
//     console.log(x + " is NOT a Prime number");
//   }
// }
// findPrime(5);
// findPrime(4);
// findPrime(2);
// findPrime(7);
// findPrime(19);
// findPrime(20);

// function outer() {
//   "use strict";
//   let x = 10;
//   function inner(x) {
//     let y = x + 10;
//     console.log(this);
//   }
//   inner();
// }
// outer();

// function factorial(x) {
//   const newX = [];
//   while (x >= 1) {
//     newX.push(x);
//     x--;
//   }
//   console.log(
//     newX.reduce((acc, value) => {
//       return acc * value;
//     }, 1)
//   );
// }
// factorial(6);

// function isArrayWithoutDuplicate(x) {
//   if (Array.isArray(x) === true) {
//     const arrayWithoutDuplicate = [];
//     for (let item of x) {
//       if (!arrayWithoutDuplicate.includes(item)) {
//         arrayWithoutDuplicate.push(item);
//       }
//     }
//     return arrayWithoutDuplicate;
//   } else {
//     return `${x} is not an Array`;
//   }
// }

// console.log(isArrayWithoutDuplicate(5));
// console.log(isArrayWithoutDuplicate([1, 2, 3]));
// console.log(isArrayWithoutDuplicate([1, 1, 1, 2, 2, 3]));

// function swap(a, b) {
//   var [b, a] = [a, b];
//   console.log(a, b);
// }

// swap(30, 10);

// function clients([a, b, c], [x, y]) {
//   // write your code here
//   console.log(params.length);
// }
// clients([1, 2, 3], ["a", "b"]);
// let timer = function () {
//   let date = new Date();
//   console.log(date);
//   let dateNow = date.toLocaleDateString();
//   console.log(dateNow);
// };

// setTimeout(timer, 2000);
// (function () {
//   console.log("Hello World!");
// })();
// (function () {
//   console.log(this);
// })();

// let person = "Rena";
// (function logPerson() {
//   let person = "Robbie";
//   console.log(person);
// })();
// console.log(person);
// function adder(...params) {
//   console.log(params.length);
//   for (let i = 0; i < params.length; i++) {
//     console.log(params[i] + params[i]);
//   }
// }
// adder(1, 2, 3, 4, 5, 6, 7, 8, 9);
function sum(...params) {
  let total = 0;
  params.forEach((item) => {
    total += item;
  });
  console.log(total);
}
sum(1, 2, 3, 4, 5, 6, 7, 8, 9);
