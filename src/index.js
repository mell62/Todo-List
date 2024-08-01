import "./styles/style.css";
import "./styles/modern-normalize.css";
import { renderTasks, addTask, deleteTask } from "./barrel";

renderTasks();

const tasksContainer = document.querySelector(".tasks");
const addBtn = document.querySelector(".add-task");

// Add tasks
addBtn.addEventListener("click", addTask.bind(null, "Sample"));
addBtn.addEventListener("click", renderTasks);

//Delete tasks
tasksContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-btn")) {
    deleteTask(event.target);
    renderTasks();
  }
});
