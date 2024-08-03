import { removeTask } from "../barrel";

export { deleteTask };

function deleteTask(deleteBtn) {
  const deleteBtns = document.querySelectorAll(".delete-btn");
  const deleteBtnIndex = Array.prototype.indexOf.call(deleteBtns, deleteBtn);
  removeTask(deleteBtnIndex);
}
