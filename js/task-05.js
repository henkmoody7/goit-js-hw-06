const inputRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");

const inputChange = (event) => {
  outputRef.textContent = event.currentTarget.value;
};

inputRef.addEventListener("input", inputChange);
