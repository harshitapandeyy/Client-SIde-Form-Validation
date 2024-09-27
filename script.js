const username = document.getElementById("username");
const mail = document.getElementById("mail");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const userForm = document.getElementById("userForm");

function formValidation() {
  const mailValue = mail.value.trim();
  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();
  const confirmPasswordValue = confirmPassword.value.trim();

  let usernameValidated = false;
  let emailValidated = false;
  let passwordValidated = false;

  if (usernameValue === "") {
    setError(username, "Username cannot be blank.");
  } else {
    setSuccess(username);
    usernameValidated = true;
  }
  if (mailValue === "") {
    setError(mail, "Mail cannot be blank.");
  } else {
    setSuccess(mail);
    emailValidated = true;
  }
  if (passwordValue === "") {
    setError(password, "Password cannot be blank.");
  } else if (passwordValue < 6) {
    setError(password, "Password must contain 6 characters.");
  } else {
    setSuccess(password);
  }
  if (confirmPasswordValue != passwordValue) {
    setError(confirmPassword, "Please re-enter the password correctly.");
  } else {
    setSuccess(confirmPassword);
    passwordValidated = true;
  }

  if (usernameValidated && emailValidated && passwordValidated) {
    document.getElementById("form-container").style.display = "none";
    document.getElementById("onSubmitted").style.display = "block";
  }
}

function setError(input, message) {
  const form = input.parentElement;
  const span = form.querySelector("span");
  span.innerText = message;
  form.className = "form error";
}
function setSuccess(input) {
  const form = input.parentElement;
  const span = form.querySelector("span");
  span.innerText = "";
  form.className = "form success";
}

userForm.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
});