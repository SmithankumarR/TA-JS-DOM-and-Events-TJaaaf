function main() {
    let inputTodo = document.querySelector(".input-todo");
    let rootElm = document.querySelector("ul");
    let div = document.querySelector(".bottom-container")
    let all = document.querySelector(".all");
    let active = document.querySelector(".active");
    let completed = document.querySelector(".completed");
    let clear = document.querySelector(".clear");
    let count = document.querySelector(".count");
    
    let defaultSelected = "all";
    
    let todoArray = JSON.parse(localStorage.getItem("todos")) || [];
    
    
    function addItems(event)  {
        let value = event.target.value;
        // console.dir(value);
        if(event.keyCode === 13 && value !== "") {
            todoArray.push({
                name: value,
                isDone: false
            });
            event.target.value = "";
            console.log(todoArray);
            localStorage.setItem("todos", JSON.stringify(todoArray));
            createtodoUI(rootElm, todoArray);
        }
    }
    
    function handleDelete(event) {
        let id = event.target.dataset.id;
        todoArray.splice(id, 1);
        localStorage.setItem("todos", JSON.stringify(todoArray));
        createtodoUI(rootElm, todoArray);
    }
    
    
    function handleChange(event) {
        let id = event.target.dataset.id;
        todoArray[id].isDone = !todoArray[id].isDone;
        localStorage.setItem("todos", JSON.stringify(todoArray));
       
        createtodoUI(rootElm, todoArray);
    
    }
    
    function itemsLeftCount() {
      let notCompleted=    todoArray.filter((todo) => {
            return !todo.isDone;
        });
    
        count.innerText = `${notCompleted.length} ${notCompleted.length > 1 ? "items" : "item"} left`;
    
    }
    
    
    
    
    inputTodo.addEventListener("keyup", addItems);
    
    function createtodoUI(root, data) {
       
        root.innerHTML = "";
        data.forEach((todo, i) => {
            
            let li = document.createElement("li");
            li.classList.add("todo-container")
            let input = document.createElement("input");
            input.type = "checkbox";
            input.classList.add("checkbox");
            input.checked = todo.isDone;
            input.setAttribute("data-id", i);
            let label = document.createElement("label");
            label.innerText = todo.name;
            label.setAttribute("data-id", i);
            if(todo.isDone === true) {
            label.classList.add("strike");
            } else {
                label.classList.remove("strike");
                label.classList.add("unstrike");
            }   
            let span = document.createElement("span");
            span.innerText = "❌";
            span.setAttribute("data-id", i);
            li.append(input, label, span);
           
            root.append(li);
            
           
            span.addEventListener("click", handleDelete);
            input.addEventListener("input", handleChange);
            itemsLeftCount();
            
        });
        
       
    }
    
    createtodoUI(rootElm, todoArray);
    
    all.addEventListener("click", () => {
        createtodoUI(rootElm, todoArray);
        defaultSelected = "all";
        updateActiveButton();
    });
    
    clear.addEventListener("click", () => {
        todoArray = todoArray.filter((todo) => !todo.isDone);
        defaultSelected = "clear";
        updateActiveButton();
        createtodoUI(rootElm, todoArray);
    });
    
    active.addEventListener("click", () => {
        let notCompleted = todoArray.filter((todo) => !todo.isDone);
        defaultSelected = "active";
        updateActiveButton();
        createtodoUI(rootElm, notCompleted);
    })
    
    completed.addEventListener("click", () => {
        let completedArray = todoArray.filter((todo) => todo.isDone);
        defaultSelected = "completed";
        updateActiveButton();
        createtodoUI(rootElm, completedArray);
    })
    
    function updateActiveButton(btn = defaultSelected) {
        all.classList.remove("selected");
        active.classList.remove("selected");
        completed.classList.remove("selected");
        clear.classList.remove("selected");
    
        if(btn === "all") {
            all.classList.add("selected");
        }
        if(btn === "active") {
            active.classList.add("selected");
        }
        if(btn === "completed") {
            completed.classList.add("selected");
        }
        if(btn === "clear") {
            clear.classList.add("selected");
        }
    
    }
    
    updateActiveButton();
    
    itemsLeftCount();
    }
    
    main();