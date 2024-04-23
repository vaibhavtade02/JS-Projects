const button = document.querySelector("#button")
const body = document.querySelector("body")
const colors = ["red", "pink", "blue", "cyan", "purple", "green", "grey", "brown", "orange", "violet"]

body.style.backgroundColor = "orange"

button.addEventListener('click', changeBackground)

function changeBackground() {
    const colorsIndex = parseInt(Math.random() * colors.length);
    body.style.backgroundColor = colors[colorsIndex]
}

// setInterval(changeBackground, 1000);
