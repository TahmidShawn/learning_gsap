const textSplitterFunc = () => {
    let text = document.querySelector("h1");
    let textValue = text.textContent;

    let splittedText = textValue.split("");

    let halfValue = splittedText.length / 2;

    let clutter = "";

    splittedText.forEach((elem, idx) => {
        if (idx < halfValue) {
            clutter += `<span class="a">${elem} </span>`;
        } else {
            clutter += `<span class="b">${elem} </span>`;
        }
    });

    text.innerHTML = clutter;
};

textSplitterFunc();

gsap.from("h1 .a", {
    y: 200,
    duration: 0.5,
    stagger: 0.2,
    opacity: 0,
});
gsap.from("h1 .b", {
    y: 200,
    duration: 0.5,
    stagger: -0.2,
    opacity: 0,
});
