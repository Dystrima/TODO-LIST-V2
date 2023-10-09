const form = document.querySelector("form");
const input = document.querySelector("form input");
const add = document.querySelector(".add");
const list = document.querySelector("ul");

const todoArray = [];

// getting the local storage back after a refresh
function refresh() {
  let keys = Object.keys(localStorage);
  for (i = 0; i < keys.length; i++) {
    let inputValue = localStorage.getItem(keys[i]);
    todoArray.push(inputValue);
  }
  // now let's display our previous values
  if (todoArray.length > 0) {
    for (i = 0; i < todoArray.length; i++) {
      let inputValue = todoArray[i];
      const items = document.createElement("li");
      const btnDelete = document.createElement("button");
      btnDelete.classList.add("remove");
      btnDelete.innerText = "delete";
      items.innerText = inputValue;
      items.appendChild(btnDelete);
      list.appendChild(items);
    }
  }
}

window.onload = refresh();

add.addEventListener("click", (e) => {
  // no refresh
  e.preventDefault();

  // retrieve input value
  let inputValue = input.value;
  if (inputValue !== "") {
    let id = new Date().getTime();
    localStorage.setItem(id, inputValue);
    const items = document.createElement("li");
    const btnDelete = document.createElement("button");
    btnDelete.classList.add("remove");
    btnDelete.innerText = "delete";
    items.innerText = inputValue;
    items.appendChild(btnDelete);
    list.appendChild(items);
    input.value = "";

    // delete the todo
    btnDelete.addEventListener("click", (e) => {
      let stored = Object.keys(localStorage);
      items.removeChild(btnDelete);
      const content = items.innerText;
      for (i = 0; i < stored.length; i++) {
        if (localStorage[stored[i]] == content) {
          delete localStorage[stored[i]];
          list.removeChild(items);
        }
      }
    });
  }
});
