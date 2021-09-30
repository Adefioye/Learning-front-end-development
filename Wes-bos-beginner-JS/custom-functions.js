// function calculateBill() {
//     // this is a function body
//     console.log("Running Calculate Bill!!!");
// }

// function expression

// doctorize("wes");

// console.log(doctorize2("wes"));

// const doctorize = function (firstName) {
//     return `Dr. ${firstName}`;
// }

// // function declaration
// function doctorize2 (firstName) {
//     return `Dr. ${firstName}`
// }

// ARROW FUNCTION
// function inchToCM(inches) {
//     return inches * 2.54;
// }

// Use arrow function for the function above

// const inchToCM = (inches) => {
//     return inches * 2.54;
// }

// Using an implicit return with arrow functions

// const inchToCM = (inches) => inches * 2.54;

// const add = (a, b = 3) => a + b;

// Below is IIFE (Immediately invoked function expression)
// function(){
//     console.log("Running the anon function");
//     return `You are cool`;
// }

// if IIFE has an age parameter
// (function (age) {
//     console.log("Running the Anon function");
//     return `Your are cool and ${age}`;
//   })(20);

// const koko = {
//     name: "Koko Lamba",
//     sayHi: function sayHi() {
//         console.log("Hey Koko!");
//         return "Hey Koko!";
//     }
// }

// Using a shorthand approach to writing functions

const koko = {
    name: "Koko Lamba",
    // long-hand method!
    sayHi: function sayHi() {
        console.log("Hey koko!");
        return "Hey Koko!";
    },
    // short hand method
    yellHi() {
        console.log("Heyo! crazywackadoodoo")
        return "Hey Kokolesky!!"
    },
    // Arrow function
    whisperHi: () => {
        return "Hey Koko! You are a mutunbe";
    }
}

// const button = document.querySelector(".click-me");

// // Listen for a click
// button.addEventListener("click", koko.sayHi);

// setTimeout(koko.yellHi, 2000);

setTimeout(function () {
    console.log("using anonymous function to show callback function")
}, 2000)



