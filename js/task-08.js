const formRef = document.querySelector(".login-form");

formRef.addEventListener("submit", onCheckSubmit);

function onCheckSubmit(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget;

  const formData = {
    Email: email.value,
    Password: password.value,
  };

  if (email.value === "" || password.value === "") {
    alert("Заповніть всі поля");
  } else {
    console.log(formData);
  }
  event.currentTarget.reset();
}
