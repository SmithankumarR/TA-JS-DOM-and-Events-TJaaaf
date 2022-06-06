function main(){

let input = document.querySelector('#text');
let root = document.querySelector('ul');

let allTodos = [
];


function handleInput(event){
  let value = event.target.value;
  if(event.keyCode === 13 && value !== ""){
      let todo = {
          name : value,
          isDone : false,
      };
      allTodos.push(todo);
      event.target.value = "";

      createUI();
  }
}
function deleteinput(event){
    let id = event.target.dataset.id;
   allTodos.splice(id,1);

   createUI();

}
function handleToggle(event){
    let id = event.target.dataset.id;
   allTodos[id].isDone = !allTodos[id].isDone;

   
   createUI();

}
function createUI(){
    root.innerHTML = " ";
    allTodos.forEach((data,i) => {
         let li = document.createElement('li');
         let input = document.createElement('input');
         input.type = "checkbox";
         input.checked = data.isDone;
         input.addEventListener("input", handleToggle)
         input.setAttribute("data-id", i);
         let p = document.createElement('p');
         p.innerText = data.name;
         let span = document.createElement('span');
         span.innerText = "X";
         span.setAttribute("data-id", i);
        span.addEventListener("click",deleteinput )
         li.append(input, p, span);
         root.append(li)

    });
}
createUI();
input.addEventListener('keyup', handleInput);

}
main();