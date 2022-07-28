const itemRef = document.querySelectorAll(".item");

const countCategories = () => {
  console.log(`Number of categories: ${itemRef.length}`);
};

const countT = () => {
  for (const item of itemRef) {
    const titleRef = item.children[0];
    const listRef = item.children[1].children;
    console.log(`Category: ${titleRef.textContent}`);
    console.log(`Elements: ${listRef.length}`);
  }
};

countCategories();

countT();
