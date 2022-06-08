let rootElm = document.querySelector("ul");
  let houseContainer = document.querySelector(".houses");
  let searchPerson = document.querySelector(".search");

  let allHouseArray = got.houses;
  let allpeople = got.houses.reduce((acc, curr) => {
    acc = acc.concat(curr.people);
    return acc;
  }, []);

  let allTags = got.houses.map((house) => house.name);
  let activeHouse = "";

  function creategotUI(data = []) {
    console.log(data);
    rootElm.innerHTML = "";
      data.forEach((peopleName) => {
        let li = document.createElement("li");
        li.classList.add("flex-30", "mini-container", "flex", "column", "jcc", "aic");
        let img = document.createElement("img");
        img.src = peopleName.image;
        let h2 = document.createElement("h2");
        h2.innerText = peopleName.name;
        h2.classList.add("name");
        let p = document.createElement("p");
        p.innerText = peopleName.description;
        p.classList.add("desc");
        let button = document.createElement("a");
        button.href = peopleName.wikiLink;
        button.innerText = "Know More";
        button.classList.add("link");
        li.append(img, h2, p, button);
        rootElm.append(li);
      })
    } 

    function houseTags(tags = []) {
      houseContainer.innerHTML = "";
      allTags.forEach((tag, i) => {
        let a = document.createElement("a");
        a.innerText = tag;
        a.classList.add("house");
        a.setAttribute("data-houseName", tag);
        if(activeHouse === tag) {
          a.classList.add("selected");
        }
        houseContainer.append(a);
        console.log(a);
       
        a.addEventListener("click", () => {
          activeHouse = tag;
          
          let peopleOfTheHouse = got.houses.find((house) => house.name === tag).people || [];
          creategotUI(peopleOfTheHouse);
          houseTags(allTags);
        });
      })
    }
     



searchPerson.addEventListener("keyup", (event) => {
let newArray =  allpeople.filter((people) => {
    return  people.name.toLowerCase().includes(event.target.value.toLowerCase()) || people.name.toUpperCase().includes(event.target.value.toUpperCase());
  })
  creategotUI(newArray);
});



creategotUI(allpeople);

houseTags();