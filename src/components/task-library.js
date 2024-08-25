export {
  taskFactory,
  taskLibrary,
  addTask,
  removeTask,
  removeTemporaryTask,
  setEditFlag,
  togglePriority,
  removeAllTasks,
  moveAllTasks,
  removeAllTemporaryTasks,
  revertTaskLibrary,
};

let taskFactory = (title) => {
  let taskTitle = title;
  let project = "General";
  let dueDate;
  let taskDescription = "";
  let highPriority = false;
  let mediumPriority = true;
  let lowPriority = false;
  let editFlag = false;
  return {
    taskTitle,
    project,
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
let temporaryTaskLibrary = [];

function addTask(title) {
  let newTask = taskFactory(title);
  taskLibrary.push(newTask);
}

function removeTask(index) {
  taskLibrary.splice(index, 1);
}

function removeTemporaryTask(task) {
  let taskIndex = temporaryTaskLibrary.indexOf(task);
  if (taskIndex !== -1) {
    temporaryTaskLibrary.splice(taskIndex, 1);
  }
}

function removeAllTasks() {
  taskLibrary.splice(0, taskLibrary.length);
}

function removeAllTemporaryTasks() {
  temporaryTaskLibrary.splice(0, temporaryTaskLibrary.length);
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

function moveAllTasks() {
  taskLibrary.forEach((task) => {
    if (!temporaryTaskLibrary.includes(task)) {
      //Check to prevent duplicating tasks
      temporaryTaskLibrary.push(task);
    }
  });
  removeAllTasks();
}

function revertTaskLibrary() {
  if (temporaryTaskLibrary.length !== 0) {
    //Check to prevent removing all tasks
    removeAllTasks();
    temporaryTaskLibrary.forEach((task) => {
      taskLibrary.push(task);
    });
    removeAllTemporaryTasks();
  }
}
