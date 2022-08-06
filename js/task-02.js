const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listOfIngredients = [];

ingredients.forEach(function callback(item) {
  const ingredient = document.createElement('li');
  ingredient.textContent = item;
  ingredient.className = 'item';
  listOfIngredients.push(ingredient);
});

document.querySelector("#ingredients").append(...listOfIngredients);
