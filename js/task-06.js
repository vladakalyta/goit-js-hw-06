const input = document.querySelector("#validation-input");
const lengthOfInput = input.getAttribute("data-length");
console.log(lengthOfInput);

function inputBlur(event) {
  if (event.currentTarget.value.length === Number(lengthOfInput)) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}

input.addEventListener("blur", inputBlur);
