let form = document.querySelector("form");
let usernameError = "";

let handleSubmit = (event) => {
  event.preventDefault();

  let username = event.target.elements.username;

  if (username.value.length < 4) {
    username.classList.add("error");
    username.nextElementSibling.innerText = "Can not be less than 4 characters";
  } else {
    username.classList.add("sucess");
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
    name.classList.add("sucess");
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
    email.classList.add("sucess");
    email.nextElementSibling.innerText = "";
  }
  //   =======================================
  let number = event.target.elements.number;
  if (
    number.value.split("").some((e) => isNaN(e) === true) ||
    number.value.length < 8
  ) {
    number.classList.remove("sucess");

    number.classList.add("error");
    number.nextElementSibling.innerText =
      "Phone number can only contain numbers";
  } else {
    number.classList.remove("error");
    number.classList.add("sucess");
    number.nextElementSibling.innerText = "";
  }
  //   ==========================
  let password = event.target.elements.password;
  let cpassword = event.target.elements.cPassword;
  if (password.value !== cpassword.value) {
    password.classList.remove("sucess");
    password.classList.add("error");
    cpassword.classList.remove("sucess");
    cpassword.classList.add("error");
    cpassword.nextElementSibling.innerText = "Password didn't match";
  } else {
    password.classList.remove("error");
    password.classList.add("sucess");
    cpassword.classList.remove("error");
    cpassword.classList.add("sucess");
    cpassword.nextElementSibling.innerText = "";
  }

  if (
    username.classList.contains("sucess") &&
    name.classList.contains("sucess") &&
    email.classList.contains("sucess") &&
    number.classList.contains("sucess") &&
    password.classList.contains("sucess") &&
    cpassword.classList.contains("sucess")
  ) {
    alert("User Added Successfully!");
  }
};

form.addEventListener("submit", handleSubmit);
