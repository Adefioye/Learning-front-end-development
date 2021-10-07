// Make a div
const div1 = document.createElement("div");

// add a class of wrapper to it
div1.classList.add("wrapper");

// put it into the body
document.body.append(div1);

// make an unordered list
const ul = document.createElement("ul");

// add three list items with the words "one, two, three" in them
const li1 = document.createElement("li");
li1.innerText = "one";
const li2 = document.createElement("li");
li2.innerText = "two";
const li3 = document.createElement("li");
li3.innerText = "three";
// put that list into the above wrapper
ul.append(li1);
ul.append(li2);
ul.append(li3);
div1.append(ul);

// create an image
const image = document.createElement("img");

// set the source to an image
image.src = "https://picsum.photos/500";
// set the width to 250
image.width = 250;
// add a class of cute
image.classList.add("cute");
// add an alt of Cute Puppy
image.alt = "Cute Puppy"
// Append that image to the wrapper
div1.append(image);

// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above
const divHTML = `
    <div class="my-div">
        <p>First paragraph</p>
        <p>Second paragraph</p>
    </div>
`;
ul.insertAdjacentHTML("beforebegin", divHTML);


// add a class to the second paragraph called warning
const myDiv = document.querySelector(".my-div");
myDiv.children[1].classList.add("warning");
// remove the first paragraph
myDiv.children[0].remove()

// document.querySelectorAll(".wrapper div p")[1].classList.add("warning");
// document.querySelectorAll(".wrapper div p")[0].remove();


// create a function called generatePlayerCard that takes in three arguments: name, age, and height
function generatePlayerCard(name, age, height) {
    const html = `
      <div class="playerCard">
        <h2>${name} - ${age}</h2>
        <p>They are ${height} and ${age} years old. In Dog years this person would be ${age * 7}. That would be a tall dog!</p>
        <button>Click Me</button>
      </div>
    `;
    return html;
  }
// function generatePlayerCard(name, age, height){
//     return `
//     <div class="playerCard">
//         <h2>${name} — ${age}</h2>
//         <p>They are ${height} and ${age} years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
//     </div>
//     `
// };
// have that function return html that looks like this:
/* <div class="playerCard">
  <h2>NAME — AGE</h2>
  <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
</div> */

// make a new div with a class of cards
const div3 = document.querySelector("div");
div3.classList.add("cards")

// make 4 player cards using generatePlayerCard
const player1 = generatePlayerCard("bobrisky", 30, 40);
const player2 = generatePlayerCard("kobitana", 25, 35);
const player3 = generatePlayerCard("sunbukishi", 46, 78);
const player4 = generatePlayerCard("bontosa", 35, 89);


// append those cards to the div
div3.insertAdjacentHTML("afterbegin", player1);
div3.insertAdjacentHTML("afterbegin", player2);
div3.insertAdjacentHTML("afterbegin", player3);
div3.insertAdjacentHTML("afterbegin", player4);

// put the div into the DOM just before the wrapper element
div1.insertAdjacentElement("beforebegin", div3);
// Bonus, put a delete Button on each card so when you click it, the whole card is removed
const playerButtons = document.querySelectorAll(".playerCard button")

function deleteCard(e){
    e.currentTarget.parentElement.remove()
}
for (let button of playerButtons){
    button.addEventListener("click", deleteCard)
}
// select all the buttons!
// make out delete function
// loop over them and attach a listener
