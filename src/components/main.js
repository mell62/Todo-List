import { removeTask, taskLibrary } from "../barrel";

export { deleteTask, saveTask, setDatePickerValue };

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
