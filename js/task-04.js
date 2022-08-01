const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const valueRef = document.querySelector("#value");
let counterValue = 0;

const decrementValue = (event) => {
  counterValue -= 1;
  valueRef.textContent = counterValue;
};

const incrementValue = (event) => {
  counterValue += 1;
  valueRef.textContent = counterValue;
};

decrementBtn.addEventListener("click", decrementValue);
incrementBtn.addEventListener("click", incrementValue);
