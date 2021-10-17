// fetch('https://api.cryptonator.com/api/ticker/btc-usd')
//     .then(res => {
//         console.log("RESPONSE, WAITING TO PARSE...", res)
//         return res.json()
//     })
//     .then(data => {
//         console.log("DATA PARSED...")
//         console.log(data.ticker.price)
//     })
//     .catch(e => {
//         console.log("OH NO! ERROR!", e)
//     })

// axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
//     .then(res => {
//         console.log(res.data.ticker.price)
//     })
//     .catch(err => {
//         console.log("ERROR!", err)
//     })

// const fetchBitcoinPrice = async () => {
//     try {
//         const res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
//         console.log(res.data.ticker.price)
//     } catch (e) {
//         console.log("ERROR!", e)
//     }
// }

// const jokes = document.querySelector('#jokes');
// const button = document.querySelector('button');

// const addNewJoke = async () => {
//     const jokeText = await getDadJoke();
//     const newLI = document.createElement('LI');
//     newLI.append(jokeText);
//     jokes.append(newLI)
// }

// const getDadJoke = async () => {
//     try {
//         const config = { headers: { Accept: 'application/json' } }
//         const res = await axios.get('https://icanhazdadjoke.com/', config)
//         return res.data.joke;
//     } catch (e) {
//         return "NO JOKES AVAILABLE! SORRY :("
//     }

// }

// button.addEventListener('click', addNewJoke)

// axios.get("https://api.cryptonator.com/api/ticker/btc-usd")
// .then(res => {
//     console.log("Price successfully fetched");
//     console.log(res.data.ticker.price);
// })
// .catch(err => {
//     console.log("Oh! no!:", err);
// })

// USing async and axios

const fetchBitcoinPrice = async () => {
    try {
        res = await axios.get("https://api.cryptonator.com/api/ticker/btc-usd");
        console.log("Ticker price:", res.data.ticker.price);
    } 
    catch (err){
        console.log("Oh! no!:", err);
    }
}

const button = document.querySelector("button");
const jokes = document.querySelector("#jokes");


const getDadJoke = async() => {
    const config = {headers: {Accept: "application/json"}}
    const res = await axios.get("https://icanhazdadjoke.com/", config);
    return res.data.joke;
}

const addNewJoke = async() => {
    const jokeText = await getDadJoke();
    const li = document.createElement("li");
    li.append(jokeText);
    jokes.append(li);
}

// When using arrow function, the function can only be accessed after defining function expression
button.addEventListener("click", addNewJoke);