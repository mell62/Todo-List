export { addtask };

const tasksContainer = document.querySelector(".tasks");

function addtask() {
  const newTask = document.createElement("div");
  newTask.classList.toggle("task");
  tasksContainer.appendChild(newTask);
}
