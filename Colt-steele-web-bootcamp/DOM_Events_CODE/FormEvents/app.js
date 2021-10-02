

// const tweetForm = document.querySelector('#tweetForm');
// const tweetsContainer = document.querySelector('#tweets');
// tweetForm.addEventListener('submit', function (e) {
//     e.preventDefault();

//     // const usernameInput = document.querySelectorAll('input')[0];
//     // const tweetInput = document.querySelectorAll('input')[1];
//     const usernameInput = tweetForm.elements.username;
//     const tweetInput = tweetForm.elements.tweet;
//     addTweet(usernameInput.value, tweetInput.value)
//     usernameInput.value = '';
//     tweetInput.value = '';
// });

// const addTweet = (username, tweet) => {
//     const newTweet = document.createElement('li');
//     const bTag = document.createElement('b');
//     bTag.append(username)
//     newTweet.append(bTag);
//     newTweet.append(`- ${tweet}`)
//     tweetsContainer.append(newTweet);
// }

// const tweetForm = document.querySelector("#tweetForm");
// const tweetContainer = document.querySelector("#tweets")
// tweetForm.addEventListener("submit", function (e) {

//     e.preventDefault();
//     const userName = tweetForm.elements.username.value;
//     const tweet = tweetForm.elements.tweet.value;

//     const newTweet = document.createElement("li");
//     const bTag = document.createElement("b");
//     bTag.append(userName);
//     newTweet.append(bTag);
//     newTweet.append(`- ${tweet}`);
//     tweetContainer.append(newTweet);
// });

const form = document.querySelector('form');
const productContainer = document.querySelector("ul");
form.addEventListener("submit", function (e) {

    e.preventDefault();
    const productInput = form.elements.product;
    const qtyInput = form.elements.qty;
    addProductInfo(qtyInput.value, productInput.value);
    qtyInput.value = "";
    productInput.value = "";
})

function addProductInfo (qty, product) {
    const newProduct = document.createElement("li");
    newProduct.innerText = `${qty} ${product}`;
    productContainer.appendChild(newProduct);
}


// ul
// <li>2 product <li>