const terms = document.querySelector(".terms-and-conditions");
const button = document.querySelector('.accept');
// terms.addEventListener("scroll", function(e){
//     // console.log(e);
//     // console.log(e.target);
//     // console.log(e.currentTarget);
//     console.log(e.currentTarget.scrollTop);
//     console.log(e.currentTarget.scrollHeight);
// })

const watch = document.querySelector(".watch");
const ob = new IntersectionObserver(obCallback, {
    root: terms,
    threshold: 1
});

function obCallback(payload){
    // console.log(payload[0].isIntersecting);
    // console.log(payload[0].intersectionRatio);
    if (payload[0].intersectionRatio === 1) {
        button.disabled = false;
        // Stp observing the button
        ob.unobserve(terms.lastElementChild);
    }
}

// ob.observe(watch);
ob.observe(terms.lastElementChild);