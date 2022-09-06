// let input = document.querySelector(`input[type = "text]`);
// let rootmovie = document.querySelector(".movies-list");
// let allMovies = [
//   {
//     name: "Inception",
//     watched: false,
//   },
//   {
//     name: "persuit-of-Happiness",
//     watched: false,
//   },
// ];

// input.addEventListener("keyup", (eve) => {
//   // adding a movie
//   if (eve.keyCode === 13) {
//     allMovies.push({
//       name: eve.target.value,
//       watched: false,
//     });
//  eve.target.value = "";
//     createMovieUI();
//   }
// });

// function deleteMovie(event) {
//   //  event.target.parentElement.remove();
//   let id = event.target.dataSet.id;
//   allMovies.splice(id, 1);
//   createMovieUI();
// }
// function handlechange(event){
// let id = event.target.id;
//  allMovies[id].watched = !allMovies[id].watched;
// }
// function createMovieUI() {
//   rootmovie.innerHTML = "";
//   allMovies.forEach((movie, i) => {
//     let li = document.createElement("li");
//     let input = document.createElement("input");
//     input.classList.add("styled-checkbox");
//     input.type = "checkbox";
//     input.id = i;
//     input.checked = movie.watched;
//     input.addEventListener('click', handlechange)
//     let label = document.createElement("label");
//     label.for = i;
//     label.innerText = movie.name;
//     let span = document.createElement("span");
//     span.innerText = "X";
//     span.setAttribute("data-id", i);
//     span.addEventListener("click", deleteMovie);

//     li.append(input, label, span);

//     rootmovie.append(li);
//   });
// }

// createMovieUI();



let form = document.querySelector("form");
let list = document.querySelector(".list");

let addName = (event) => {
  event.preventDefault();

  let name = form.elements.moviename;

  let movie = document.createElement("div");
  movie.classList.add("movie");

  let checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  let h2 = document.createElement("h2");
  h2.innerText = name.value;
  let i = document.createElement("i");
  i.classList.add("far", "fa-times-circle", "cross");
  movie.append(checkbox, h2, i);
  list.append(movie);
  // ===============
  let crossList = document.querySelectorAll(".cross");
  handlecross = (event) => {
    event.target.parentElement.style.display = "none";
    console.log("done");
  };
  crossList.forEach((e) => {
    e.addEventListener("click", handlecross);
  });

  //   ======

  name.value = "";
};

form.addEventListener("submit", addName);