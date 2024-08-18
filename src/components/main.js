import { removeTask, taskLibrary, removeAllTasks } from "../barrel";

export {
  deleteTask,
  saveTask,
  setDateLimit,
  findTaskEditingStatus,
  sortTaskLibrary,
};

function deleteTask(btn) {
  if (btn.classList.contains("delete-btn")) {
    const deleteBtns = document.querySelectorAll(".delete-btn");
    const deleteBtnIndex = Array.prototype.indexOf.call(deleteBtns, btn);
    removeTask(deleteBtnIndex);
  } else if (btn.classList.contains("finish-task-btn")) {
    const finishBtns = document.querySelectorAll(".finish-task-btn");
    const finishBtnIndex = Array.prototype.indexOf.call(finishBtns, btn);
    removeTask(finishBtnIndex);
  }
}

function saveTask(doneBtn, newTitle, dueDate, taskDescription) {
  const doneBtns = document.querySelectorAll(".task-editing");
  const doneBtnIndex = Array.prototype.indexOf.call(doneBtns, doneBtn);
  taskLibrary[doneBtnIndex].taskTitle = newTitle;
  taskLibrary[doneBtnIndex].dueDate = dueDate;
  taskLibrary[doneBtnIndex].taskDescription = taskDescription;
}

function formatDate(date) {
  let year = date.getFullYear();
  let month = (date.getMonth() + 1).toString();
  let day = date.getDate().toString();

  if (month.length < 2) {
    month = "0" + month;
  }

  if (day.length < 2) {
    day = "0" + day;
  }

  let formattedDate = `${year}-${month}-${day}`;

  return formattedDate;
}

function setDateLimit() {
  const tasks = document.querySelectorAll(".task");
  tasks.forEach((task) => {
    let dueDatePicker = task.querySelector(".date-picker");
    let todaysDate = new Date();
    todaysDate = formatDate(todaysDate);
    dueDatePicker.setAttribute("min", todaysDate);
  });
}

function findTaskEditingStatus() {
  return taskLibrary.some((task) => task.editFlag);
}

function findHighPriorityTasks() {
  return taskLibrary.filter((task) => task.highPriority);
}

function findMediumPriorityTasks() {
  return taskLibrary.filter((task) => task.mediumPriority);
}

function findLowPriorityTasks() {
  return taskLibrary.filter((task) => task.lowPriority);
}

function sortHighPriorityTasks() {
  return findHighPriorityTasks().sort((firstTask, nextTask) =>
    firstTask.taskTitle.toLowerCase() > nextTask.taskTitle.toLowerCase()
      ? 1
      : -1
  );
}

function sortMediumPriorityTasks() {
  return findMediumPriorityTasks().sort((firstTask, nextTask) =>
    firstTask.taskTitle.toLowerCase() > nextTask.taskTitle.toLowerCase()
      ? 1
      : -1
  );
}

function sortLowPriorityTasks() {
  return findLowPriorityTasks().sort((firstTask, nextTask) =>
    firstTask.taskTitle.toLowerCase() > nextTask.taskTitle.toLowerCase()
      ? 1
      : -1
  );
}

function pushHighPriorityTasks(highPriorityTasks) {
  highPriorityTasks.forEach((task) => {
    taskLibrary.push(task);
  });
}

function pushMediumPriorityTasks(mediumPriorityTasks) {
  mediumPriorityTasks.forEach((task) => {
    taskLibrary.push(task);
  });
}

function pushLowPriorityTasks(lowPriorityTasks) {
  lowPriorityTasks.forEach((task) => {
    taskLibrary.push(task);
  });
}
function sortTaskLibrary() {
  let highPriorityTasks = sortHighPriorityTasks();
  let mediumPriorityTasks = sortMediumPriorityTasks();
  let lowPriorityTasks = sortLowPriorityTasks();

  removeAllTasks();
  pushHighPriorityTasks(highPriorityTasks);
  pushMediumPriorityTasks(mediumPriorityTasks);
  pushLowPriorityTasks(lowPriorityTasks);
}
