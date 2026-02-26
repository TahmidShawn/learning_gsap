const menu = document.querySelector("#nav i");
const cross = document.querySelector("#contain i");

const tl = gsap.timeline();

tl.to("#contain", {
    right: 0,
    duration: 0.5,
});

tl.from("#contain h2", {
    x: 150,
    duration: 0.5,
    stagger: 0.2,
    opacity: 0,
});

tl.from("#contain i", {
    opacity: 0,
});

tl.pause();

menu.addEventListener("click", () => {
    tl.play();
});

cross.addEventListener("click", () => {
    tl.reverse();
});
