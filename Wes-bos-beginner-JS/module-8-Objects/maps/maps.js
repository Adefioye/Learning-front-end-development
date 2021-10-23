// // // Creata a map like so
// const myMap = new Map();
// // Map has a variety of methods .set() , .has(), .delete();
// myMap.set("name", "wes");
// myMap.age = 100;
// myMap.set(100, "This is a number");
// console.log(myMap);

// const person1 = {
//   name: "wes",
//   age: 200,
// };

// myMap.set(person1, "Really awesome");
// // console.log(myMap);
// // console.log(myMap.get(person1));
// // console.log(myMap.size);

const score = 100;
const prizes = new Map();

prizes.set(100, "Bear");
prizes.set(200, "Duck");
prizes.set(300, "Car");

// console.log(`You win a ${prizes.get(score)}`);

// for (let [point, prize] of prizes) {
//   console.log(prize);
// }

const ul = document.querySelector(".prizes");

for (let [points, prize] of prizes) {
  const li = `<li>${points} - ${prize}</li>`;
  ul.insertAdjacentHTML("beforeend", li);
}
