const MOVE_AMOUNT = 10;
console.log("It's working fine!");
// Select the elements on the page - canvas, shake button
// set up our canvas for drawing
// write a draw function
// write a handler for the keys
// clear or shake function
// listen for arrow keys

// Select the canvas
const canvas = document.querySelector('#etch-a-sketch');
// Select the context(the place where drawing is drawn)
const ctx = canvas.getContext("2d");
// Grab the shake button
const shakebutton = document.querySelector('.shake');
// Let us set default that allows us to get a smooth drawing
ctx.lineJoin = "round";
ctx.lineCap = "round";
// Set line width to 10px
ctx.lineWidth = 10;
// // Trying to start to draw with beginPath
// ctx.beginPath();
// // Next move the context
// ctx.moveTo(200, 200);
// ctx.lineTo(200, 200);
// ctx.stroke();

// Using destructuring to grab width and height attributes of "canvas" variable;
const {width, height} = canvas;
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height)
//console.log(width, height);
// Trying to start to draw with beginPath
// The code below randomly places the starting dot within the canvas
ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// Listen for a keydown event sitewide using the window object
function handleKey(e){
  console.log(e.key);
  console.log("Handle key");
}

// Listening only for arrow keys
function handleKey(e){
  if (e.key.includes("Arrow")) {
    console.log(e.key);
    console.log("HANDLE KEY!");
  }
}

window.addEventListener("keydown", handleKey);

// Now that we have the key, let us handover the ArrowKeys to a draw function;
let hue = 0;
function draw({key}){
  // hue += 10;
  // ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.strokeStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
  ctx.beginPath();
  ctx.moveTo(x, y);
  switch (key) {
    case "ArrowUp":
      y -= MOVE_AMOUNT;
      break;
    case "ArrowRight":
      x += MOVE_AMOUNT;
      break;
    case "ArrowDown":
      y += MOVE_AMOUNT;
      break;
    case "ArrowLeft":
      x -= MOVE_AMOUNT;
      break;
    default:
      break;
  }
  ctx.lineTo(x, y);
  ctx.stroke();
}

function handleKey(e){
  if (e.key.includes("Arrow")) {
    draw({key: e.key});
    console.log(e.key);
    // console.log("HANDLE KEY!");
  }
}

// clear or shake function
// Introduce the function that can be used to clear the canvas
function clearCanvas(){
  canvas.classList.add("shake");
  ctx.clearRect(0, 0, height, width);
  canvas.addEventListener("animationend", function(){
    console.log("Animation has been ended");
    canvas.classList.remove("shake");
  },
  { once: true})
}

// clearCanvas();

// Run the clearCanvas function when you click the shakebutton
const shakeButton = document.querySelector("div.buttons .shake");
shakeButton.addEventListener("click", clearCanvas);