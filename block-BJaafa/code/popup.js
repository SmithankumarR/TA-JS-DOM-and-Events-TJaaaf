if(document.querySelector(".popup")){

const button = document.querySelector(".button");
const circle = document.querySelector(".circle");

let buttonOn = false;

button.addEventListener("click", () => {
    if(!buttonOn){
        buttonOn = true;
        circle.style.animation = " moveCircleRight 1s forwards";
        button.style.animation = " backgroundchange 1s forwards";
        chrome.tabs.executeScript({
            file: "appON.js"
        })

    } else{
        buttonOn = false;
        circle.style.animation = " moveCircleLeft 1s forwards";
        button.style.animation = " backgroundreverse 1s forwards"
        chrome.tabs.executeScript({
            file: "appOFF.js"
        })
    }
})
}