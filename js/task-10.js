function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputRef = document.querySelector("#controls input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesRef = document.querySelector("#boxes");

function createBoxes(amount) {
  amount = inputRef.value;
  let width = 30;
  let height = 30;
  const divEl = document.createDocumentFragment();
  for (let i = 1; i <= amount; i += 1) {
    const blockElements = document.createElement("div");
    blockElements.classList.add("boxes__item");
    blockElements.style.cssText = `width: ${width}px; height: ${height}px; background-color: ${getRandomHexColor()}`;

    width += 10;
    height += 10;
    divEl.append(blockElements);
  }
  boxesRef.append(divEl);
}

function destroyBoxes() {
  boxesRef.innerHTML = "";
}

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);
