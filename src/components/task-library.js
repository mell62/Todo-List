export { taskFactory, taskLibrary, addTask };

let taskFactory = (title) => {
  let taskTitle = title;
  return { taskTitle };
};

let defaultTask = taskFactory("Sample task");

let taskLibrary = [defaultTask];

function addTask(title) {
  let newTask = taskFactory(title);
  taskLibrary.push(newTask);
}
