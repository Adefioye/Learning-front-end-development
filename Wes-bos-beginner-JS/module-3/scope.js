// const first = "koko";
// console.log(first);

// Checking for the keyword that is attached to the window object
// const first = 'wes';
// let second = 'bos';
// var age = 100;

// function sayHi() {
//     console.log("Hi!");
// }

// cool inside of the IF block is not available globally
// if (1 === 1) {
//     const cool = true;
//   }
// console.log(cool);

// However, using the var to set "cool" makes it available globally

// if (1 === 1) {
//     var cool = true;
// }
// console.log(cool);

// We can make the cool variable available globally from the block statement provided the
// "let" keyword is set outside;
// let cool;
// if (1 === 1) {
//     cool = true;
// }
// console.log(cool);

function isCool(name) {
    if (name === 'wes') {
      var cool = true;
    }
    console.log(cool);
    return cool;
  }