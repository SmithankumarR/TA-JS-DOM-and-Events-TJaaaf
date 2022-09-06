let input = document.querySelector("form");
let model = document.querySelector(".modelOverlay");
let modelInfo = document.querySelector(".modelInfo");

let userInfo = {};

function handleInput(event) {
  console.log("Input");

  event.preventDefault();

  let elements = event.target;

  userInfo.name = elements.name.value;
  userInfo.email = elements.email.value;
  userInfo.watch = elements.choice.value;
  userInfo.color = elements.color.value;
  userInfo.marks = elements.movie.value;
  userInfo.books = elements.book.value;
  userInfo.terms = elements.terms.checked;

  model.classList.add("open");
  let close = document.querySelector(".modelClose");
  close.addEventListener("click", () => {
    model.classList.remove("open");
  });
  displayInfo(userInfo);
}

input.addEventListener("submit", handleInput);

function displayInfo(data = {}) {
  console.log("Display");
  modelInfo.innerHTML = "";

  let h1 = document.createElement("h1");
  h1.innerText = `Hello ${data.name}`;
  let email = document.createElement("p");
  email.innerText = `Email: ${data.email}`;
  let choice = document.createElement("p");
  choice.innerText = `You Love: ${data.watch}`;
  let color = document.createElement("p");
  color.innerText = `Color: ${data.color}`;
  let range = document.createElement("p");
  range.innerText = `Range: ${data.marks}`;
  let genre = document.createElement("p");
  genre.innerText = `Book Genre: ${data.books}`;
  let terms = document.createElement("p");
  terms.innerText = `${
    data.terms
      ? "You have accepted the term and condition"
      : "You have not accepted the term and condition"
  }`;
  modelInfo.append(h1, email, choice, color, range, genre, terms);
}
