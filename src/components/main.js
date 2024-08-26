import {
  removeTask,
  taskLibrary,
  removeAllTasks,
  moveAllTasks,
  revertTaskLibrary,
  removeTemporaryTask,
} from "../barrel";

export {
  deleteTask,
  deleteTemporaryTask,
  saveTask,
  setDateLimit,
  findTaskEditingStatus,
  sortTaskLibrary,
  loadTodaysTasks,
  loadThisWeeksTasks,
  loadProjectTasks,
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

function deleteTemporaryTask(btn) {
  if (btn.classList.contains("delete-btn")) {
    const deleteBtns = document.querySelectorAll(".delete-btn");
    const deleteBtnIndex = Array.prototype.indexOf.call(deleteBtns, btn);
    const task = taskLibrary[deleteBtnIndex];
    removeTemporaryTask(task);
  } else if (btn.classList.contains("finish-task-btn")) {
    const finishBtns = document.querySelectorAll(".finish-task-btn");
    const finishBtnIndex = Array.prototype.indexOf.call(finishBtns, btn);
    const task = taskLibrary[finishBtnIndex];
    removeTemporaryTask(task);
  }
}

function saveTask(doneBtn, newTitle, project, dueDate, taskDescription) {
  const doneBtns = document.querySelectorAll(".task-editing");
  const doneBtnIndex = Array.prototype.indexOf.call(doneBtns, doneBtn);
  taskLibrary[doneBtnIndex].taskTitle = newTitle;
  taskLibrary[doneBtnIndex].project = project;
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

function findTodaysTasks() {
  let todaysDate = new Date();
  todaysDate = formatDate(todaysDate);
  revertTaskLibrary();

  const todaysTasks = taskLibrary.filter((task) => {
    let taskDate = task.dueDate;
    return taskDate === todaysDate;
  });

  return todaysTasks;
}

function loadTodaysTasks() {
  let todaysTasks = findTodaysTasks();
  moveAllTasks();
  todaysTasks.forEach((task) => {
    taskLibrary.push(task);
  });
}

function findThisWeeksTasks() {
  let todaysDate = new Date();
  todaysDate.setHours(0, 0, 0, 0);

  let nextWeek = new Date(todaysDate);
  nextWeek.setDate(todaysDate.getDate() + 7);
  revertTaskLibrary();
  let thisWeeksTasks = taskLibrary.filter((task) => {
    let thisDate = new Date(task.dueDate);
    return thisDate >= todaysDate && thisDate <= nextWeek;
  });

  return thisWeeksTasks;
}

function loadThisWeeksTasks() {
  let thisWeeksTasks = findThisWeeksTasks();
  moveAllTasks();
  thisWeeksTasks.forEach((task) => {
    taskLibrary.push(task);
  });
}

function findProjectTasks(projectName) {
  revertTaskLibrary();
  let projectTasks = taskLibrary.filter((task) => task.project === projectName);
  return projectTasks;
}

function loadProjectTasks(projectName) {
  let projectTasks = findProjectTasks(projectName);
  moveAllTasks();
  projectTasks.forEach((task) => {
    taskLibrary.push(task);
  });
}
