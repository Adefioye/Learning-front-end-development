// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector("#container");

for (let i = 1; i < 501; i++) {
    const pokemon = document.createElement("div")
    const image = document.createElement("img");
    image.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
    const num = document.createElement("p");
    num.innerText = `#${i}`;
    pokemon.appendChild(image);
    pokemon.appendChild(num);
    container.appendChild(pokemon);
}

