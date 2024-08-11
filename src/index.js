import "./styles/style.css";
import "./styles/modern-normalize.css";
import {
  renderTasks,
  addTask,
  deleteTask,
  saveTask,
  swapBtns,
  selectLatestTaskTitle,
  setEditFlag,
  renderTasksEditable,
  renderLatestTaskEditable,
  enableInput,
} from "./barrel";

renderTasks();

const tasksContainer = document.querySelector(".tasks");
const addBtn = document.querySelector(".add-task");

// Add tasks
addBtn.addEventListener("click", addTask.bind(null, "New Task"));
addBtn.addEventListener("click", renderTasks);
addBtn.addEventListener("click", renderLatestTaskEditable);
addBtn.addEventListener("click", renderTasksEditable);
addBtn.addEventListener("click", enableInput);
addBtn.addEventListener("click", selectLatestTaskTitle);

//Delete tasks
tasksContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-btn")) {
    deleteTask(event.target);
    renderTasks();
    renderTasksEditable();
    enableInput();
  }
});

//Rename tasks
tasksContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("done-btn")) {
    const task = event.target.closest(".task");
    const taskTitle = task.querySelector(".task-title");
    saveTask(event.target, taskTitle.value);
  }
});

//Disable/enable input
tasksContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("done-btn")) {
    const task = event.target.closest(".task");
    let inputFields = task.querySelectorAll("input");
    inputFields.forEach((input) => {
      input.disabled = true;
    });
  }
  if (event.target.classList.contains("edit-btn")) {
    const task = event.target.closest(".task");
    let inputFields = task.querySelectorAll("input");
    inputFields.forEach((input) => {
      input.disabled = false;
    });
  }
});

//Set edit flag
tasksContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("edit-btn")) {
    const taskBtns = document.querySelectorAll(".task-editing");
    const btnIndex = Array.prototype.indexOf.call(taskBtns, event.target);
    setEditFlag(true, btnIndex);
  }
});

//Un-set edit flag
tasksContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("done-btn")) {
    const taskBtns = document.querySelectorAll(".task-editing");
    const btnIndex = Array.prototype.indexOf.call(taskBtns, event.target);
    setEditFlag(false, btnIndex);
  }
});

//Swap done and edit buttons
tasksContainer.addEventListener("click", (event) => {
  if (
    event.target.classList.contains("done-btn") ||
    event.target.classList.contains("edit-btn")
  ) {
    swapBtns(event.target);
  }
});
