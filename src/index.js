import "./styles/style.css";
import "./styles/modern-normalize.css";
import { renderTasks, addTask } from "./barrel";

renderTasks();

const addBtn = document.querySelector(".add-task");

addBtn.addEventListener("click", addTask.bind(null, "Sample"));
addBtn.addEventListener("click", renderTasks);
