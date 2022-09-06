let firstBoxes = document.querySelectorAll('.first li');
let secondBox = document.querySelector('.second');

firstBoxes.forEach((box, index) => {
    box.addEventListener("click",(eve)=>{
        eve.target.innerText = index + 1;
        
        setTimeout(() => {
            eve.target.innerText = "";
        },5000);
    })
})

secondBox.addEventListener("click",(eve) => {
    console.log(eve.target);
    let text = eve.target.dataset.text;
    eve.target.innerText = text;
        
    setTimeout(() => {
        eve.target.innerText = "";
    },5000);

})