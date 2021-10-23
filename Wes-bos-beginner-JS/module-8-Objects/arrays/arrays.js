// // Mutative Method
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(`Original array: ${numbers}`);
// // const numbersBackward = numbers.reverse();
// // console.log(`Mutated array: ${numbers}`);
// console.log(`Item 5 to the end: ${numbers.slice(5)}`);
// console.log(`Item 2 to 4: ${numbers.slice(2, 4)}`);

// // To avoid using reverse to mutate the original Array Object, we use the "spread" operator
// const numbersReversed = [...numbers].reverse();
// console.log(`Reversed array: ${numbersReversed}`);

const names = ["wes", "kait", "snickers"];
// names.push("lux");
// console.log(names);

// push method mutates the array, if we don't wanna mutate the array, we again use the
// spread operator like so.
const names2 = [...names, "lux"];
// console.log(names2);

// To add an item to the front of an array, we use the "unshift" method
// names.unshift("poppy");
// console.log(names);
// names.splice()

// To find the index of an item in an array
const kaitIndex = names.findIndex((name) => name === "kait");

console.log(names[kaitIndex]);
