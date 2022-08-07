const changeColorButton = document.querySelector(".change-color");
const nameOfColor = document.querySelector(".color");
const body = document.querySelector("body");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

changeColorButton.addEventListener("click", () => {
  body.style.backgroundColor = getRandomHexColor();
  nameOfColor.textContent = getRandomHexColor();
});
