// function outer () {
//     const outerVar = "Hey! I am the outer var";

//     function inner () {
//         const innerVar = "Hey! I am the inner var";
//         console.log(innerVar);
//         console.log(outerVar);
//     }
//     inner();
// }

// Let us remove the calling of "inner" function from the outer function and 
// let us return the inner function. This can be done in 2 ways

// 1st method
// function outer () {
//     const outerVar = "Hey! I am the outer var";

//     return function inner () {
//         const innerVar = "Hey! I am the inner var";
//         console.log(innerVar);
//         console.log(outerVar);
//     }
// }

// 2nd method
// function outer () {
//     const outerVar = "Hey! I am the outer var";

//     function inner () {
//         const innerVar = "Hey! I am the inner var";
//         console.log(innerVar);
//         console.log(outerVar);
//     }
//     return inner;
// }

// const innerFn = outer();
// innerFn()

// Using the idea of closure to make different greetings
// function createGreeting(greet = "") {
//     const myGreet = greet.toUpperCase();
//     return function (name) {
//         return `${myGreet} ${name}`;
//     }
// }
// const sayHello = createGreeting("Hello");
// const sayHi = createGreeting("Hi");
// console.log(sayHello("Kitty"));
// console.log(sayHi("MB"));

// Create Private variables

function createGame(gameName){
    let score = 0;

    return function win(){
        score ++;
        return `Your name ${gameName} score is ${score}`
    }
}

const hockeyGame = createGame("Hockey");

const soccerGame = createGame("Soccer");