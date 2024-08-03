export { renderTasks, swapBtns };
import { taskLibrary } from "../barrel";

const tasksContainer = document.querySelector(".tasks");

function createDeleteBtn() {
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "🗑";
  deleteBtn.classList.toggle("delete-btn");
  return deleteBtn;
}

function renderTasks() {
  cleanTasks();
  taskLibrary.forEach((item) => {
    createTask(item);
  });
  renderEditBtns();
}

function cleanTasks() {
  const tasks = document.querySelectorAll(".task");
  tasks.forEach((task) => {
    tasksContainer.removeChild(task);
  });
}

function createTask(item) {
  const taskElement = document.createElement("div");
  const taskTitle = document.createElement("input");
  taskTitle.setAttribute("value", item.taskTitle);
  taskElement.appendChild(createDoneBtn());
  taskElement.appendChild(taskTitle);
  taskElement.appendChild(createDeleteBtn());
  taskElement.classList.toggle("task");
  tasksContainer.appendChild(taskElement);
  taskTitle.select();
}

function createDoneBtn() {
  const doneBtn = document.createElement("button");
  doneBtn.textContent = "✅";
  doneBtn.classList.toggle("done-btn");
  return doneBtn;
}

function createEditBtn() {
  const editBtn = document.createElement("button");
  editBtn.textContent = "🖉";
  editBtn.classList.toggle("edit-btn");
  return editBtn;
}

function swapBtns(btn) {
  btn.classList.contains("done-btn") ? swapDoneBtn(btn) : swapEditBtn(btn);
}

function swapDoneBtn(doneBtn) {
  const task = doneBtn.closest(".task");
  doneBtn.remove();
  task.prepend(createEditBtn());
}

function swapEditBtn(editBtn) {
  const task = editBtn.closest(".task");
  editBtn.remove();
  task.prepend(createDoneBtn());
}

function renderEditBtns() {
  const tasks = document.querySelectorAll(".task");
  tasks.forEach((task, index) => {
    if (index !== tasks.length - 1) {
      const doneBtn = task.querySelector(".done-btn");
      swapBtns(doneBtn);
    }
  });
}
