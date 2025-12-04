// task1
const header = document.getElementById("main-header");
const h1 = header.querySelector("h1");
h1.style.color = "blue";

// task2
const tasks = document.querySelectorAll(".task");

tasks.forEach(function (task) {
  task.classList.add("highlight");
});

// task3
const btn = document.getElementById("action-btn");
btn.addEventListener("click", function () {
  const firstTask = document.querySelector(".task");
  firstTask.textContent = "Задание выполнено!";
});

// task4
const btnAdd = document.getElementById("add-task-btn");

btnAdd.addEventListener("click", function () {
  const textOfInput = document.getElementById("new-task-input");
  const value = textOfInput.value.trim();

  if (value !== "") {
    const newLi = document.createElement("li");
    newLi.classList.add("new-item");
    newLi.textContent = value;

    const toDoList = document.getElementById("todo-list");
    toDoList.appendChild(newLi);

    textOfInput.value = "";
  }
});

// task5
const removeBtn = document.getElementById("remove-last-btn");

removeBtn.addEventListener("click", function () {
  const toDoList = document.getElementById("todo-list");
  toDoList.removeChild(toDoList.lastElementChild);
});

// task6
const togBtn = document.getElementById("toggle-btn");

togBtn.addEventListener("click", function () {
  const header = document.getElementById("main-header");
  header.classList.toggle("hidden");
});

// task7
const taskInput = document.getElementById("new-task-input");
taskInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    const textOfInput = document.getElementById("new-task-input");
    const value = textOfInput.value.trim();

    if (value !== "") {
      const newLi = document.createElement("li");
      newLi.classList.add("new-item");
      newLi.textContent = value;

      const toDoList = document.getElementById("todo-list");
      toDoList.appendChild(newLi);

      textOfInput.value = "";
    }
  }
});
