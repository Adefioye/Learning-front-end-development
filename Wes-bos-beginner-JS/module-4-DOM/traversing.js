const wes = document.querySelector(".wes");
// console.log("Displaying elements of the paragraph tag");
// console.log(wes.children);
// console.log("Displaying nodes of the paragraph tag");
// console.log(wes.childNodes);

// Let us explore other methods
// console.log(wes.firstElementChild);
// console.log(wes.lastElementChild);
// console.log(wes.previousElementSibling);
// console.log(wes.nextElementSibling);
// console.log(wes.parentElement);
// console.log(wes.childNodes);
// console.log(wes.childElementCount);

const p = document.createElement("p");
p.innerText = "I will be removed";
console.log(p);
document.body.append(p);

// Surprisingly, the "p" variable can still be retrieved from javascript memory
p.remove();
console.log(p);