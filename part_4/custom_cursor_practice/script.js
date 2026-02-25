var cursor = document.getElementById("cursor");
var main = document.getElementById("main");
var imageDiv = document.getElementById("image");

main.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
        duration: 1,
    });
});

imageDiv.addEventListener("mouseenter", function () {
    cursor.innerHTML = "view more";
    gsap.to(cursor, {
        scale: 2,
    });
});
imageDiv.addEventListener("mouseleave", function () {
    cursor.innerHTML = "";
    gsap.to(cursor, {
        scale: 1,
    });
});
