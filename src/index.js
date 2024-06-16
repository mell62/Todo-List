import "./styles/style.css";
import "./styles/modern-normalize.css";
import { addtask } from "./barrel";

const addTaskBtn = document.querySelector(".add-task");

addTaskBtn.addEventListener("click", addtask);
