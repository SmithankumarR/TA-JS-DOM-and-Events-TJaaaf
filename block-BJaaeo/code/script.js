let output = document.querySelector('.result')
let number = document.querySelectorAll('.box')
let initialValue = "";

function handleinput(event){
    if(event.target.classList.contains("equalto")){
        output.innerText = eval(output.innerText);
        return;
    }
    output.innerText += event.target.innerText;
}
number.forEach((btn =>{
    btn.addEventListener("click", handleinput)
}));

let clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
 output.innerText = initialValue;
})

