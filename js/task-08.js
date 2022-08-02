const formRef = document.querySelector(".login-form");

formRef.addEventListener("submit", onCheckSubmit);

function onCheckSubmit(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Заповніть всі поля");
  }

  const formData = {
    Email: email.value,
    Password: password.value,
  };

  event.currentTarget.reset();
  console.log(formData);
}
