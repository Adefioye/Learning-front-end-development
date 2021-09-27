// function isEven(num){
//     if ((num % 2) === 0 ){
//         console.log("even")
//     }
// }

// function getColor(phrase) {
//     if (phrase === "stop") {
//         console.log("red")
//     }
//     else if (phrase === "slow") {
//         console.log("yellow")
//     }
//     else if (phrase === "go") {
//         console.log("green")
//     }
//     else {
//         console.log("purple")
//     }
// }

// for (let i = 25; i >= 0; i -= 5) {
//     console.log(i)
// }

// const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];

// for (let i = 0; i < people.length; i += 1) {
//     console.log(people[i].toUpperCase())
// }

// let maximum = parseInt(prompt("Enter the maximum number!"))
// while (!maximum) {
//     maximum = parseInt(prompt("Please enter a valid number!"))
// }
// const targetNum = Math.floor(Math.random() * maximum) + 1;
// console.log(targetNum)

// let guess = parseInt(prompt("Enter your first guess!"))
// let attempt = 1
// while (parseInt(guess) !== targetNum) {
//     if (guess === 'q') break;
//     attempt++
//     if (guess > targetNum) {
//         guess = prompt("Too high! Enter a new guess:")
//     }
//     else {
//         guess = prompt("Too low! Enter a new guess:")
//     }
// }
// if (guess === 'q') {
//     console.log("Ok! You quit!")
// }
// else {
//     console.log(`Number of attempts: ${attempt}`)
//     console.log("CONGRATS! You got it...")
// }

// const numbers = [1,2,3,4,5,6,7,8,9];

// for (let number of numbers) {
//     console.log(number * number)
// }

// function isSnakeEyes(num1, num2) {
//     if (num1 === 1 && num2 === 1) {
//         console.log("Snake Eyes!");
//     }
//     else {
//         console.log("Not Snake Eyes!");
//     }
// }

// function multiply(num1, num2) {
//     return num1 * num2
// }

// function isShortsWeather(temperature) {
//     if (temperature >= 75) {
//         return true
//     }
//     else {
//         return false
//     }
// }

// function lastElement(array) {
//     let arrayLength = array.length;
//     if (typeof array !== "object" || arrayLength === 0) {
//         return null
//     }
//     else {
//         return array[arrayLength - 1]
//     }
// }

// function capitalize(str) {
//     return str[0].toUpperCase() + str.substring(1);
// }

// function sumArray(array) {
//     let total = 0;
//     for (let i = 0; i < array.length; i++) {
//         total += array[i]
//     }
//     return total
// }

// function returnDay(num) {
//     const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
//     if (num == 1) {
//         return days[num - 1]
//     }
//     else if (num == 2) {
//         return days[num - 1]
//     }
//     else if (num == 3) {
//         return days[num - 1]
//     }
//     else if (num == 4) {
//         return days[num - 1]
//     }
//     else if (num == 5) {
//         return days[num - 1]
//     }
//     else if (num == 6) {
//         return days[num - 1]
//     } 
//     else if (num == 7) {
//         return days[num - 1]
//     }
//     else {
//         return null
//     }
// }




