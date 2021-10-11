const buttons = document.querySelectorAll(".card button");
const modalOuter = document.querySelector(".modal-outer");
const modalInner = document.querySelector(".modal-inner");

function handleButtonClick(e){
    const button = e.currentTarget;
    const card = button.closest(".card");
    // Grab the image src
    const imgSrc = card.querySelector("img").src;
    // console.log(imgSrc);
    const name = card.querySelector('h2').textContent;
    const desc = card.dataset.description;
    // console.log(desc);
    modalInner.innerHTML = `
    <img width="600" height="600" src=${imgSrc.replace("200", "600")} alt=${name} />
     <p>${desc}</p>
    `;
    modalOuter.classList.add("open");
    // console.log("Clicked me!");
}

buttons.forEach(button => button.addEventListener("click", handleButtonClick));

function closeModal(){
    modalOuter.classList.remove("open");
}
modalOuter.addEventListener('click', function(event) {
    const isOutside = !event.target.closest('.modal-inner');
    // console.log(event.target);
    // console.log(isOutside);
    if (isOutside){
        closeModal();
    }
})

// Let us take away the modal if we press escape key
window.addEventListener("keydown", function(event){
    if (event.key === "Escape"){
        closeModal();
    }
})
