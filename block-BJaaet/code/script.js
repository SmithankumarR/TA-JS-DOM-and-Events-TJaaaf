let form = document.querySelector('form');
let movieList = document.querySelectorAll('li');
let movie = movieList.forEach((m) => m.innerText)
function handleSubmit(event){
    event.preventDefault();
   movie = event.target.elements.movie.value;
}


form.addEventListener('click', handleSubmit);