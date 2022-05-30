let firstBtn = document.querySelector(".first .banner");
let secondBtn = document.querySelector(".second .banner");
let box = document.querySelector('.box');
function handler(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.body.children[0].children[1].style.backgroundColor = "#" + randomColor;
  firstBtn.innerHTML =  click + randomColor;
}
firstBtn.addEventListener("click", handler);
secondBtn.addEventListener("mousemove", handler);
handler();