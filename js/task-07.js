const fontSizeControl = document.querySelector("#font-size-control");
const textToChangeSize = document.querySelector("#text");

fontSizeControl.addEventListener("input", () => {
  let currentFontSize = fontSizeControl.value;
  textToChangeSize.style.fontSize = `${currentFontSize}px`;
});
