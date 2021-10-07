const item = document.querySelector(".item")
// console.log(item.innerHTML);

const width = 500;
const src = `https://picsum.photos/${width}`;
const desc = "Cute pup <h1>LOVE THIS GUY</h1>";
const myHTML = `
  <div class="wrapper">
    <h2>Cute ${desc}</h2>
    <img src="${src}" alt="${desc}"/>
  </div>
`;

const myFragment = document.createRange().createContextualFragment(myHTML);
// console.log(myFragment);
// console.log(myFragment.querySelector("img"));
document.body.appendChild(myFragment);

