var path = `M 10 100 Q 450 100 890 100`;
var oldPath = `M 10 100 Q 450 100 890 100`;

const string = document.getElementById("string");
string.addEventListener("mousemove", function (dets) {
    path = `M 10 100 Q ${dets.x} ${dets.y} 890 100`;

    gsap.to("svg path", {
        attr: {
            d: path,
        },
        duration: 0.3,
        ease: "power3.out",
    });
});

string.addEventListener("mouseleave", function () {
    gsap.to("svg path", {
        attr: {
            d: oldPath,
        },
        duration: 1.5,
        ease: "elastic.out(1,0.3)",
    });
});
