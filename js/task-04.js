const counterValue = document.querySelector("#value");
const addButton = document.querySelector('button[data-action="increment"]');
const substructButton = document.querySelector(
  'button[data-action="decrement"]'
);

let value = 0;

addButton.addEventListener("click", () => {
  value += 1;
  counterValue.textContent = value;
});

substructButton.addEventListener("click", () => {
  value -= 1;
  counterValue.textContent = value;
});
