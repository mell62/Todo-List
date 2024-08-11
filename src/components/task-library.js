export { taskFactory, taskLibrary, addTask, removeTask, setEditFlag };

let taskFactory = (title) => {
  let taskTitle = title;
  let dueDate;
  let taskDescription = "";
  let editFlag = false;
  return { taskTitle, editFlag, dueDate, taskDescription };
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
