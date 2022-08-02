const inputRef = document.querySelector("#validation-input");

const checkValidation = (event) => {
  event.currentTarget.classList.add("invalid");
  const dataLength = parseInt(event.currentTarget.dataset.length);

  if (dataLength === event.currentTarget.value.length) {
    event.currentTarget.classList.remove("invalid");
    inputRef.classList.add("valid");
  }
};

inputRef.addEventListener("blur", checkValidation);
