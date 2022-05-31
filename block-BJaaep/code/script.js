function randomNumber (max){
 return (Math.round(Math.random() * max));
}
let allBox = document.querySelectorAll('.box');
let newBox = document.querySelectorAll('.box2');

function handleMouse(select,Selem){
    select.innerText = randomNumber(12);
    Selem.innerText = randomNumber(2);
    return select;
}

allBox.forEach(elem => {
  elem.addEventListener('click',function(){
      handleMouse(elem);
  });
});

newBox.forEach(Selem => {
    Selem.addEventListener('click',function(){
        handleMouse(Selem);
    });
  });