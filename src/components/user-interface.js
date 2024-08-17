export {
  renderTasks,
  swapBtns,
  selectLatestTaskTitle,
  deselectTaskTitle,
  renderTasksEditable,
  renderLatestTaskEditable,
  enableInputs,
  disableInputs,
  setPriorityStyling,
};
import { taskLibrary, setEditFlag, setDateLimit } from "../barrel";

const tasksContainer = document.querySelector(".tasks");

function renderTasks() {
  cleanTasks();
  taskLibrary.forEach((item) => {
    createTask(item);
  });
  setDateLimit();
  setPriorityStyling();
  disableAllEditBtns();
}

function cleanTasks() {
  const tasks = document.querySelectorAll(".task");
  tasks.forEach((task) => {
    tasksContainer.removeChild(task);
  });
}

function createTask(task) {
  const taskElement = document.createElement("div");
  taskElement.appendChild(createEditBtn());
  taskElement.appendChild(createTaskTitle(task));
  taskElement.appendChild(createDeleteBtn());
  taskElement.appendChild(createTaskDescription(task));
  taskElement.appendChild(createDatePicker(task));
  taskElement.appendChild(createPriorities());
  taskElement.classList.toggle("task");
  tasksContainer.appendChild(taskElement);
}

function createTaskTitle(task) {
  const taskTitleContainer = document.createElement("div");
  const taskTitle = document.createElement("input");
  taskTitle.setAttribute("value", task.taskTitle);
  taskTitle.classList.toggle("task-title");
  taskTitle.disabled = true;
  taskTitleContainer.appendChild(taskTitle);
  return taskTitleContainer;
}

function createDoneBtn() {
  const doneBtn = document.createElement("button");
  doneBtn.textContent = "✅";
  doneBtn.classList.toggle("done-btn");
  doneBtn.classList.add("task-editing");
  return doneBtn;
}

function createEditBtn() {
  const editBtn = document.createElement("button");
  editBtn.textContent = "🖉";
  editBtn.classList.toggle("edit-btn");
  editBtn.classList.add("task-editing");
  return editBtn;
}

function createDeleteBtn() {
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "🗑";
  deleteBtn.classList.toggle("delete-btn");
  return deleteBtn;
}

function createTaskDescription(task) {
  const taskDescriptionContainer = document.createElement("div");
  const taskDescription = document.createElement("textarea");
  taskDescription.innerHTML = task.taskDescription;
  taskDescription.setAttribute("placeholder", "Describe your task...");
  taskDescription.setAttribute("rows", "3");
  taskDescription.setAttribute("cols", "20");
  taskDescription.disabled = true;
  taskDescription.classList.toggle("task-description");
  taskDescriptionContainer.appendChild(taskDescription);
  return taskDescriptionContainer;
}

function createDatePicker(task) {
  const datePickerContainer = document.createElement("div");
  const datePicker = document.createElement("input");
  datePicker.setAttribute("type", "date");
  datePicker.setAttribute("value", task.dueDate);
  datePicker.classList.toggle("date-picker");
  datePicker.disabled = true;
  datePickerContainer.appendChild(datePicker);
  return datePickerContainer;
}

function createPriorities() {
  const priorityContainer = document.createElement("div");
  const highPriorityBtn = document.createElement("button");
  const mediumPriorityBtn = document.createElement("button");
  const lowPriorityBtn = document.createElement("button");

  highPriorityBtn.classList.toggle("high-priority-btn");
  mediumPriorityBtn.classList.toggle("medium-priority-btn");
  lowPriorityBtn.classList.toggle("low-priority-btn");

  highPriorityBtn.classList.toggle("priority-btn");
  mediumPriorityBtn.classList.toggle("priority-btn");
  lowPriorityBtn.classList.toggle("priority-btn");

  highPriorityBtn.textContent = "High";
  mediumPriorityBtn.textContent = "Medium";
  lowPriorityBtn.textContent = "Low";

  highPriorityBtn.disabled = true;
  mediumPriorityBtn.disabled = true;
  lowPriorityBtn.disabled = true;

  priorityContainer.appendChild(highPriorityBtn);
  priorityContainer.appendChild(mediumPriorityBtn);
  priorityContainer.appendChild(lowPriorityBtn);

  return priorityContainer;
}

function swapBtns(btn) {
  btn.classList.contains("done-btn") ? swapDoneBtn(btn) : swapEditBtn(btn);
}

function swapDoneBtn(doneBtn) {
  const task = doneBtn.closest(".task");
  doneBtn.remove();
  task.prepend(createEditBtn());
}

function swapEditBtn(editBtn) {
  const task = editBtn.closest(".task");
  editBtn.remove();
  task.prepend(createDoneBtn());
}

function renderTasksEditable() {
  const tasks = document.querySelectorAll(".task");
  tasks.forEach((task, index) => {
    const taskBtn = task.querySelector(".task-editing");
    if (taskLibrary[index].editFlag === true) {
      if (task.querySelector(".edit-btn")) {
        swapBtns(taskBtn);
      }
    } else if (taskLibrary[index].editFlag === false) {
      if (task.querySelector(".done-btn")) {
        swapBtns(taskBtn);
      }
    }
  });
}

function renderLatestTaskEditable() {
  const tasks = document.querySelectorAll(".task");
  let numberOfTasks = tasks.length;
  setEditFlag(true, numberOfTasks - 1);
}

function enableInputs() {
  const tasks = document.querySelectorAll(".task");
  tasks.forEach((task) => {
    if (task.querySelector(".done-btn")) {
      enableInputElements(task);
      enableTextareaElements(task);
      enablePriorityBtns(task);
    }
  });
}

function disableInputs() {
  const tasks = document.querySelectorAll(".task");
  tasks.forEach((task) => {
    if (task.querySelector(".edit-btn")) {
      disableInputElements(task);
      disableTextAreaElements(task);
      disablePriorityBtns(task);
    }
  });
}

function enableInputElements(task) {
  let inputFields = task.querySelectorAll("input");
  inputFields.forEach((input) => {
    input.disabled = false;
  });
}

function enableTextareaElements(task) {
  let inputFields = task.querySelectorAll("textarea");
  inputFields.forEach((input) => {
    input.disabled = false;
  });
}

function enablePriorityBtns(task) {
  let priorityBtns = task.querySelectorAll(".priority-btn");
  priorityBtns.forEach((btn) => {
    btn.disabled = false;
  });
}

function disableInputElements(task) {
  let inputFields = task.querySelectorAll("input");
  inputFields.forEach((input) => {
    input.disabled = true;
  });
}

function disableTextAreaElements(task) {
  let textAreaFields = task.querySelectorAll("textarea");
  textAreaFields.forEach((textArea) => {
    textArea.disabled = true;
  });
}

function disablePriorityBtns(task) {
  let priorityBtns = task.querySelectorAll(".priority-btn");
  priorityBtns.forEach((btn) => {
    btn.disabled = true;
  });
}

function selectTaskTitle(task) {
  const taskTitle = task.querySelector(".task-title");
  taskTitle.select();
}

function deselectTaskTitle(task) {
  const taskTitle = task.querySelector(".task-title");
  taskTitle.focus();
  taskTitle.setSelectionRange(0, 0);
}

function selectLatestTaskTitle() {
  let numberOfTasks = taskLibrary.length;
  const tasks = document.querySelectorAll(".task");
  const latestTaskElement = tasks[numberOfTasks - 1];
  selectTaskTitle(latestTaskElement);
}

function setPriorityStyling() {
  const tasks = document.querySelectorAll(".task");
  tasks.forEach((task, index) => {
    let highPriorityBtn = task.querySelector(".high-priority-btn");
    let mediumPriorityBtn = task.querySelector(".medium-priority-btn");
    let lowPriorityBtn = task.querySelector(".low-priority-btn");

    taskLibrary[index].highPriority
      ? highPriorityBtn.classList.add("priority-styling")
      : highPriorityBtn.classList.remove("priority-styling");

    taskLibrary[index].mediumPriority
      ? mediumPriorityBtn.classList.add("priority-styling")
      : mediumPriorityBtn.classList.remove("priority-styling");

    taskLibrary[index].lowPriority
      ? lowPriorityBtn.classList.add("priority-styling")
      : lowPriorityBtn.classList.remove("priority-styling");
  });
}

function disableAllEditBtns() {
  const tasks = document.querySelectorAll(".task");
  tasks.forEach((task) => {
    const editBtn = task.querySelector(".edit-btn");
    editBtn.disabled = true;
  });
}
