const form = document.querySelector("form");
const input = document.querySelector("form input");
const add = document.querySelector(".add");
const list = document.querySelector("ul");

const todoArray = [];

/* // getting the local storage back after a refresh
function refresh() {
  // what are the keys ?
  let keys = Object.keys(localStorage);
  // for each key
  for (i = 0; i < keys.length; i++) {
    // store the key
    let id = keys[i];
    // store the value
    let inputValue = localStorage[keys[i]];
    // add the key/value pair to the todoArray
    todoArray.push({ id, inputValue });
  }
  // now let's display our previous values
  if (todoArray.length > 0) {
    for (i = 0; i < todoArray.length; i++) {
      // recreate the elements
      let inputValue = todoArray[i].inputValue;
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

window.onload = refresh(); */

add.addEventListener("click", (e) => {
  // no refresh
  e.preventDefault();

  // retrieve input value
  let inputValue = input.value;
  if (inputValue !== "") {
    let id = new Date().getTime();
    localStorage.setItem(id, inputValue);
    // ready to create a list item
    const items = document.createElement("li");
    // ready to create a button item with the "remove" class and "delete" written on it
    const btnDelete = document.createElement("button");
    btnDelete.classList.add("remove");
    btnDelete.innerText = "delete";
    // put input value into the new list item
    items.innerText = inputValue;
    // add the delete button into the new list item, just after the input value
    items.appendChild(btnDelete);
    // add the brand new list item with the input value and the delete button to our page :)
    list.appendChild(items);
    // we don't want to keep our previous value into the input, it's much easier no having to press delete
    input.value = "";

    // delete the todo
    btnDelete.addEventListener("click", (e) => {
      let stored = Object.keys(localStorage);
      // First delete the button so we can extrat the correct inner text from the todo
      items.removeChild(btnDelete);
      const content = items.innerText;
      for (i = 0; i < stored.length; i++) {
        if (localStorage[stored[i]] == content) {
          // delete the object from local storage
          delete localStorage[stored[i]];
          // remove the todo on the page
          list.removeChild(items);
        }
      }
    });
  }
});

// localStorage.setItem("firstName", "Henrique"); // Sets the key/value pair in the local storage
// localStorage.getItem("firstName"); // Returns "Henrique"
// localStorage.removeItem("firstName"); // Removes the key/value pair "firstName"/"Henrique" from your local storage. WHY WOULD YOU DO THAT !!!???
// localStorage.clear(); // Removes everyhting from you local storage.

/* const myArr = [1, true, "hello"];
const myStringFromArr = JSON.stringify(myArr);

console.log(myStringFromArr);
// Will log the string : "[1, true, 'hello']". This is a string !

myArrBackFromStr = JSON.parse(myStringFromArr);

console.log(myArrBackFromStr);
// Will log the array [1, true, 'hello']. This is an array ! */

/////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

//////////////
/* // ready to create a list item
    const items = document.createElement("li");
    // ready to create a button item with the "remove" class and "delete" written on it
    const btnDelete = document.createElement("button");
    btnDelete.classList.add("remove");
    btnDelete.innerText = "delete";
    // put input value into the new list item
    items.innerText = inputValue;
    // add the delete button into the new list item, just after the input value
    items.appendChild(btnDelete);
    // add the brand new list item with the input value and the delete button to our page :)
    list.appendChild(items);
    // we don't want to keep our previous value into the input, it's much easier no having to press delete
    input.value = ""; */
