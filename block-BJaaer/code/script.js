let closeBtn = document.createElement('button');
let input = document.querySelectorAll('form');
let submit = document.querySelector('button');
let output = document.createElement('div');
let userInfo = {};
function handleInput(event){
    event.preventDefault();
    userInfo.name = (event.target.elements.name.value);
    userInfo.email = (event.target.elements.email.value);
    userInfo.watch = (event.target.elements.gender.value);
    userInfo.color = (event.target.elements.email.value);
    userInfo.marks = (event.target.elements.email.value);
    userInfo.books = (event.target.elements.drone.value);
    userInfo.terms = (event.target.elements.drone.checked);

}

input.forEach((data => {
    data.addEventListener('submit',handleInput)
}))



function handleSubmit(){
    output.append(userInfo);

}
submit.addEventListener('click', handleSubmit);