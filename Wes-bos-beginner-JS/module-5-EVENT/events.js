const butts = document.querySelector('.butts');

function buyItem() {
    console.log('BUYING ITEM');
}

const buyButtons = document.querySelectorAll(".buy");

// Using arrow function
// Problem with arrow function is it does not support unbinding of event listeners
// buyButtons.forEach((button) => {
//     button.addEventListener("click", buyItem);
// });

// function handleBuyButtonClick(buyButton){
//     buyButton.addEventListener("click", buyItem);
// }

// buyButtons.forEach(handleBuyButtonClick);

function handleBuyButtonClick(event){
    console.log("You are buying it!");
    console.log(event.target);
    console.log(event.currentTarget);
}

buyButtons.forEach(function(buttonBuy){
    buttonBuy.addEventListener("click", handleBuyButtonClick);
});

// window.addEventListener("click", function(event) {
//     event.stopPropagation();
//     console.log("you clicked the window");
//     console.log(event.target);
//     console.log(event.currentTarget);
//     console.log(event.type);
//     console.log(event.bubbles);
//   },
//  { capture: true }
// );

const photoEl = document.querySelector(".photo");
    
photoEl.addEventListener("mousemove", function(event){
    console.count(event.currentTarget);
    console.log(this);
})

// the "this" keyword fails to reference the element that triggers the
// event when arrow function is used;


