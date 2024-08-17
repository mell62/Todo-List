import "./styles/style.css";
import "./styles/modern-normalize.css";
import {
  renderTasks,
  addTask,
  deleteTask,
  saveTask,
  swapBtns,
  selectLatestTaskTitle,
  deselectTaskTitle,
  setEditFlag,
  renderTasksEditable,
  renderLatestTaskEditable,
  enableInputs,
  disableInputs,
  togglePriority,
  setPriorityStyling,
} from "./barrel";

renderTasks();

const tasksContainer = document.querySelector(".tasks");
const addBtn = document.querySelector(".add-task");

// Add tasks
addBtn.addEventListener("click", addTask.bind(null, "New Task"));
addBtn.addEventListener("click", renderTasks);
addBtn.addEventListener("click", renderLatestTaskEditable);
addBtn.addEventListener("click", renderTasksEditable);
addBtn.addEventListener("click", enableInputs);
addBtn.addEventListener("click", selectLatestTaskTitle);

//Delete tasks
tasksContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-btn")) {
    deleteTask(event.target);
    renderTasks();
    renderTasksEditable();
    enableInputs();
  }
});

//Save tasks
tasksContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("done-btn")) {
    const task = event.target.closest(".task");
    const taskTitle = task.querySelector(".task-title");
    const dueDateField = task.querySelector(".date-picker");
    const taskDescriptionField = task.querySelector(".task-description");
    saveTask(
      event.target,
      taskTitle.value,
      dueDateField.value,
      taskDescriptionField.value
    );
  }
});

//Deselect task title
tasksContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("done-btn")) {
    const editingBtns = document.querySelectorAll(".task-editing");
    const tasks = document.querySelectorAll(".task");
    const btnIndex = Array.prototype.indexOf.call(editingBtns, event.target);
    const task = tasks[btnIndex];
    deselectTaskTitle(task);
  }
  if (event.target.classList.contains("edit-btn")) {
    const tasks = document.querySelectorAll(".task");
    tasks.forEach((task) => {
      deselectTaskTitle(task);
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
    renderTasksEditable();
    enableInputs();
    disableInputs();
  }
});

//Set priority flag
tasksContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("priority-btn")) {
    const tasks = document.querySelectorAll(".task");
    const thisTask = event.target.closest(".task");
    const taskIndex = Array.prototype.indexOf.call(tasks, thisTask);
    if (event.target.classList.contains("high-priority-btn")) {
      togglePriority("highPriority", taskIndex);
    } else if (event.target.classList.contains("medium-priority-btn")) {
      togglePriority("mediumPriority", taskIndex);
    } else {
      togglePriority("lowPriority", taskIndex);
    }
  }
});

tasksContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("priority-btn")) {
    setPriorityStyling();
  }
});
