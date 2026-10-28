document.addEventListener("DOMContentLoaded", () => {

const textInput = document.querySelector("#text");
const counterText = document.querySelector("#counter");

function countText() {
const text = textInput.value;
counterText.textContent = text.length;
}

textInput.addEventListener("input", countText);

});
