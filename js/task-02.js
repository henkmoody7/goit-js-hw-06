const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsListRef = document.querySelector("#ingredients");

const createIngredientMarkup = ingredients.map((ingredient) => {
  const itemRef = document.createElement("li");
  itemRef.classList.add("item");
  itemRef.textContent = ingredient;
  return itemRef;
});

ingredientsListRef.append(...createIngredientMarkup);
