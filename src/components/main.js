import { removeTask, taskLibrary } from "../barrel";

export { deleteTask, saveTask, setDatePickerValue, setDateLimit };

function deleteTask(deleteBtn) {
  const deleteBtns = document.querySelectorAll(".delete-btn");
  const deleteBtnIndex = Array.prototype.indexOf.call(deleteBtns, deleteBtn);
  removeTask(deleteBtnIndex);
}

function saveTask(doneBtn, newTitle, dueDate) {
  const doneBtns = document.querySelectorAll(".task-editing");
  const doneBtnIndex = Array.prototype.indexOf.call(doneBtns, doneBtn);
  taskLibrary[doneBtnIndex].taskTitle = newTitle;
  taskLibrary[doneBtnIndex].dueDate = dueDate;
}

function setDatePickerValue() {
  const tasks = document.querySelectorAll(".task");
  tasks.forEach((task, index) => {
    let dueDateField = task.querySelector(".date-picker");
    dueDateField.value = taskLibrary[index].dueDate;
  });
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
