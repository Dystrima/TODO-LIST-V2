/* VARIABLES */

const mainInput = document.querySelector("input");
const addBtn = document.querySelector(".add");
const todosContainer = document.querySelector("ul");

/* FUNCTIONS */

const refreshTodo = () => {
  todosContainer.innerHTML = "";
  const todosArrFromDb = JSON.parse(localStorage.getItem("todos"));
  todosArrFromDb.forEach((todo) => {
    const newLi = document.createElement("li");
    newLi.innerHTML = `<span>${todo.content}</span> <button class="delete">delete</delete>`;
    todosContainer.appendChild(newLi);

    newLi
      .querySelector(".delete")
      .addEventListener("click", () => deleteToto(todo));
  });
};

const saveToDatabase = (todo) => {
  const arrFromDb = JSON.parse(localStorage.getItem("todos"));
  arrFromDb.push({
    id: new Date().getTime(),
    content: todo,
  });
  localStorage.setItem("todos", JSON.stringify(arrFromDb));
};

const deleteToto = (todo) => {
  const arrFromDb = JSON.parse(localStorage.getItem("todos"));
  const newArr = arrFromDb.filter((item) => item.id !== todo.id);
  localStorage.setItem("todos", JSON.stringify(newArr));
  refreshTodo();
};

/* ACTIONS */

if (!localStorage.getItem("todos")) {
  localStorage.setItem("todos", JSON.stringify([]));
} else {
  refreshTodo();
}

addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (mainInput.value.trim().length) {
    const todo = mainInput.value;
    mainInput.value = "";
    saveToDatabase(todo);
    refreshTodo();
  }
});
