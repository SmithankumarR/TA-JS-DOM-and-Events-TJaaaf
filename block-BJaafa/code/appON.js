function main() {

document.querySelector("html").style.filter = "invert(1) hue-rotate(180deg)";

let media = document.querySelectorAll("img,picture,vedio");

media.forEach((mediaItem) => {
mediaItem.style.filter = "invert(1) hue-rotate(180deg)";
})
}

main();