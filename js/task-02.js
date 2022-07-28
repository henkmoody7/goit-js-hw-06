const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsListRef = document.querySelector("#ingredients");

// const elements = ingredients.map((ingredient) => {
//   const itemRef = document.createElement("li");
//   itemRef.classList.add("item");
//   itemRef.textContent = ingredient;
//   ingredientsListRef.appendChild(itemRef);
//   // console.log(itemRef);
//   // return itemRef;
// });

const createIngredientsList = (arr) => {
  return arr.map((ingredient) => {
    const itemRef = document.createElement("li");
    itemRef.classList.add("item");
    itemRef.textContent = ingredient;
    ingredientsListRef.appendChild(itemRef);
    return itemRef;
  });
};
createIngredientsList(ingredients);
