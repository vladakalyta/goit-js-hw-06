const categories = document.querySelector('#categories');
const items = categories.querySelectorAll('.item');

console.log(`Number of categories: ${items.length}`);

items.forEach(function callback(item) {
  const categoryItem = item.querySelector('h2');
  const elements = item.querySelectorAll('li');
  
  console.log(`Category: ${categoryItem.textContent}`);
  console.log(`Elements: ${elements.length}`);
});