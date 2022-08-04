const changeColorBtn = document.querySelector(".change-color");
const colorText = document.querySelector(".color");

changeColorBtn.addEventListener("click", onChangeBgColor);

function onChangeBgColor(event) {
  document.body.style.backgroundColor = getRandomHexColor();
  colorText.textContent = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
