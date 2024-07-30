export { renderTasks };
import { taskLibrary } from "../barrel";

const tasksContainer = document.querySelector(".tasks");

function createDeleteBtn() {
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "🗑";
  deleteBtn.classList.toggle("delete-task");
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
