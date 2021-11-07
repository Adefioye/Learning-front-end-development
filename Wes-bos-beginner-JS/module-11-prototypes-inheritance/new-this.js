// Using the "new" keyword
// const myDate = new Date("August 11 2025");
// console.log(myDate);
// console.log(myDate.getFullYear());

// const names = new Array("wes", "kait");
// const wes = new Object({ name: "wes" });

// console.log(`Wes Object is: ${wes}`);
// console.log(wes);

// const span = document.createElement("span");
// console.log(span);

// function tellMeAboutTheButton() {
//   console.log("outside", this);
// }

const button1 = document.querySelector(".one");
const button2 = document.querySelector(".two");

function tellMeAboutTheButton() {
  console.log("outside", this);
  setTimeout(() => {
    console.log("inside", this);
    this.textContent = "You Clicked Me";
  }, 1000);
}

button1.addEventListener("click", tellMeAboutTheButton);
button2.addEventListener("click", tellMeAboutTheButton);

// function Pizza() {
//   console.log(this);
//   console.log("Making a pizza");
// }

function Pizza(toppings = [], customer, id = "") {
  console.log("Making a pizza");

  this.toppings = toppings;
  this.customer = customer;
  this.id = Math.floor(Math.random() * 16777215).toString(16);
}

const pepperoniPizza = new Pizza(["pepperoni"], "Wes Bos");
const canadianPizza = new Pizza(
  ["pepperoni", "mushrooms", "onion"],
  "Kait Bos"
);
