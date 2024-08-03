import { removeTask, taskLibrary } from "../barrel";

export { deleteTask, saveTask };

function deleteTask(deleteBtn) {
  const deleteBtns = document.querySelectorAll(".delete-btn");
  const deleteBtnIndex = Array.prototype.indexOf.call(deleteBtns, deleteBtn);
  removeTask(deleteBtnIndex);
}

function saveTask(doneBtn, newTitle) {
  const doneBtns = document.querySelectorAll(".done-btn");
  const doneBtnIndex = Array.prototype.indexOf.call(doneBtns, doneBtn);
  taskLibrary[doneBtnIndex].taskTitle = newTitle;
}
