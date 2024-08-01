export { renderTasks, deleteTask };
import { taskLibrary, removeTask } from "../barrel";

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
    const taskElement = document.createElement("div");
    taskElement.textContent = item.taskTitle;
    taskElement.appendChild(createDeleteBtn());
    taskElement.classList.toggle("task");
    tasksContainer.appendChild(taskElement);
  });
}

function cleanTasks() {
  const tasks = document.querySelectorAll(".task");
  tasks.forEach((task) => {
    tasksContainer.removeChild(task);
  });
}

function deleteTask(deleteBtn) {
  const deleteBtns = document.querySelectorAll(".delete-btn");
  const deleteBtnIndex = Array.prototype.indexOf.call(deleteBtns, deleteBtn);
  removeTask(deleteBtnIndex);
}
