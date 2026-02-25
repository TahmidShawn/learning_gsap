// gsap.to("#box1", {
//     x: 1000,
//     duration: 2,
//     delay: 1,
//     rotate: 360,
//     backgroundColor: "yellow",
//     borderRadius: "50%",
//     scale: 0.5,
//     repeat: -1,
//     yoyo: true,
// });

// gsap.from("#box2", {
//     x: 1000,
//     duration: 2,
//     delay: 1,
// });

// gsap.from("h1", {
//     y: 30,
//     opacity: 0,
//     duration: 2,
//     delay: 1,
//     stagger: 1,
// });

const tl = gsap.timeline();

tl.to("#box1", {
    x: 1000,
    // delay: 1,
    duration: 3,
    repeat: -1,
    yoyo: true,
});
tl.to("#box2", {
    x: 1000,
    // delay: 1,
    duration: 3,
    repeat: -1,
    yoyo: true,
});
tl.to("#box3", {
    x: 1000,
    // delay: 1,
    duration: 3,
    repeat: -1,
    yoyo: true,
});
