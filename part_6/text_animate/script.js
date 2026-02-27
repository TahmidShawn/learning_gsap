const textSplitterFunc = () => {
    const h1 = document.querySelector("h1");
    const h1Text = h1.textContent;

    const splittedText = h1Text.split("");

    const halfText = splittedText.length / 2;

    let newValue = "";

    splittedText.forEach((value, idx) => {
        if (idx < halfText) {
            newValue += `<span class="a"> ${value} </span>`;
        } else {
            newValue += `<span class="b"> ${value} </span>`;
        }
    });

    h1.innerHTML = newValue;
};

textSplitterFunc();

gsap.from("h1 .a", {
    y: 150,
    duration: 0.7,
    opacity: 0,
    stagger: 0.2,
});
gsap.from("h1 .b", {
    y: 150,
    duration: 0.7,
    opacity: 0,
    stagger: -0.2,
});
