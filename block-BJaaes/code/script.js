let form = document.querySelector("form");
let usernameError = "";

let handleSubmit = (event) => {
  event.preventDefault();

  let username = event.target.elements.username;

  if (username.value.length < 4) {
    username.classList.add("error");
    username.nextElementSibling.innerText = "Can not be less than 4 characters";
  } else {
    username.classList.add("success");
    username.classList.remove("error");
    username.nextElementSibling.innerText = "";
  }
  // =====================================
  let name = event.target.elements.name;
  if (name.value.split("").some((e) => Number(e))) {
    name.classList.add("error");
    name.nextElementSibling.innerText =
      "You can't use number in the name field";
  } else {
    name.classList.add("success");
    name.classList.remove("error");

    name.nextElementSibling.innerText = "";
  }
  //   =====================================
  let email = event.target.elements.email;
  if (email.value.length < 6) {
    email.classList.add("error");
    email.nextElementSibling.innerText = "Not a valid email";
  } else {
    email.classList.remove("error");
    email.classList.add("success");
    email.nextElementSibling.innerText = "";
  }
  //   =======================================
  let number = event.target.elements.number;
  if (
    number.value.split("").some((e) => isNaN(e) === true) ||
    number.value.length < 8
  ) {
    number.classList.remove("success");

    number.classList.add("error");
    number.nextElementSibling.innerText =
      "Phone number can only contain numbers";
  } else {
    number.classList.remove("error");
    number.classList.add("success");
    number.nextElementSibling.innerText = "";
  }
  //   ==========================
  let password = event.target.elements.password;
  let cpassword = event.target.elements.cPassword;
  if (password.value !== cpassword.value) {
    password.classList.remove("success");
    password.classList.add("error");
    cpassword.classList.remove("success");
    cpassword.classList.add("error");
    cpassword.nextElementSibling.innerText = "Password didn't match";
  } else {
    password.classList.remove("error");
    password.classList.add("success");
    cpassword.classList.remove("error");
    cpassword.classList.add("success");
    cpassword.nextElementSibling.innerText = "";
  }

  if (
    username.classList.contains("success") &&
    name.classList.contains("success") &&
    email.classList.contains("success") &&
    number.classList.contains("success") &&
    password.classList.contains("success") &&
    cpassword.classList.contains("success")
  ) {
    alert("User Added Successfully!");
  }
};

form.addEventListener("submit", handleSubmit);