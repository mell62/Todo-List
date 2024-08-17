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

function setAllEditFlagsFalse() {
  taskLibrary.forEach((task) => {
    task.editFlag = false;
  });
}

function setEditFlag(state, index) {
  if (typeof state === "boolean") {
    setAllEditFlagsFalse();
    taskLibrary[index].editFlag = state;
  }
}

function setPrioritiesFalse(index) {
  taskLibrary[index].highPriority = false;
  taskLibrary[index].mediumPriority = false;
  taskLibrary[index].lowPriority = false;
}

function togglePriority(priority, index) {
  setPrioritiesFalse(index); //To set other priorities as false
  taskLibrary[index][priority] = !taskLibrary[index][priority];
}
