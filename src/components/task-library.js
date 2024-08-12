export {
  taskFactory,
  taskLibrary,
  addTask,
  removeTask,
  setEditFlag,
  togglePriority,
};

let taskFactory = (title) => {
  let taskTitle = title;
  let dueDate;
  let taskDescription = "";
  let highPriority = false;
  let mediumPriority = true;
  let lowPriority = false;
  let editFlag = false;
  return {
    taskTitle,
    editFlag,
    dueDate,
    taskDescription,
    highPriority,
    mediumPriority,
    lowPriority,
  };
};

let defaultTask = taskFactory("Sample task");

let taskLibrary = [defaultTask];

function addTask(title) {
  let newTask = taskFactory(title);
  taskLibrary.push(newTask);
}

function removeTask(index) {
  taskLibrary.splice(index, 1);
}

function setEditFlag(state, index) {
  if (typeof state === "boolean") {
    taskLibrary[index].editFlag = state;
  }
}

function togglePriority(priority) {
  priority = !priority;
}
