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
  renderProjects,
  reloadProjectInputs,
  createProjectHeader,
  removeProjectHeader,
  renderNotes,
  swapNoteBtns,
  selectLatestNoteTitle,
  deselectNoteTitle,
  renderNotesEditable,
  renderLatestNoteEditable,
  enableNoteInputs,
  disableNoteInputs,
};
import {
  taskLibrary,
  setEditFlag,
  setDateLimit,
  projectsArray,
  notesLibrary,
  setNoteEditFlag,
} from "../barrel";

const tasksContainer = document.querySelector(".tasks");

function renderTasks() {
  cleanAddNoteBtn();
  if (document.querySelector(".note")) {
    cleanNotes();
  }
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
  taskElement.appendChild(createProjectInput(task));
  taskElement.appendChild(createDeleteBtn());
  taskElement.appendChild(createTaskDescription(task));
  taskElement.appendChild(createDatePicker(task));
  taskElement.appendChild(createPriorities());
  taskElement.appendChild(createFinishBtn());
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

function createProjectInput(task) {
  const projectInputContainer = document.createElement("div");
  const projectInput = document.createElement("select");
  projectInput.classList.toggle("project-field");
  projectInput.setAttribute("style", "width: 8rem");
  projectsArray.forEach((project) => {
    const projectOption = document.createElement("option");
    projectOption.setAttribute("value", project);
    projectOption.textContent = project;
    projectInput.appendChild(projectOption);
  });
  projectInput.value = task.project;
  projectInput.disabled = true;
  projectInputContainer.appendChild(projectInput);
  return projectInputContainer;
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

function createFinishBtn() {
  const finishBtn = document.createElement("button");

  finishBtn.classList.toggle("finish-task-btn");

  finishBtn.textContent = "Finish Task";

  return finishBtn;
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
      enableProjectInputs(task);
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
      disableProjectInputs(task);
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

function enableProjectInputs(task) {
  let projectFields = task.querySelectorAll(".project-field");
  projectFields.forEach((field) => {
    field.disabled = false;
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

function disableProjectInputs(task) {
  let projectFields = task.querySelectorAll(".project-field");
  projectFields.forEach((field) => {
    field.disabled = true;
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

function reloadProjectInputs() {
  const tasks = document.querySelectorAll(".task");
  tasks.forEach((task) => {
    removeAllProjectInputs(task);
    loadAllProjectInputs(task);
  });
}

function removeAllProjectInputs(task) {
  const projectInput = task.querySelector(".project-field");
  while (projectInput.firstChild) {
    projectInput.removeChild(projectInput.firstChild);
  }
}

function loadAllProjectInputs(task) {
  const projectInput = task.querySelector(".project-field");
  projectsArray.forEach((project) => {
    const projectOption = document.createElement("option");
    projectOption.setAttribute("value", project);
    projectOption.textContent = project;
    projectInput.appendChild(projectOption);
  });
}

function createProjectHeader(projectName) {
  removeProjectHeader();

  const tasksPane = document.querySelector(".tasks");

  const projectHeaderContainer = document.createElement("div");
  const projectHeader = document.createElement("div");
  const projectHeaderBtnContainer = document.createElement("div");
  const renameProjectBtn = document.createElement("button");

  projectHeaderContainer.classList.toggle("project-header-container");

  projectHeader.textContent = projectName;
  renameProjectBtn.textContent = "🖉";

  projectHeaderBtnContainer.appendChild(renameProjectBtn);
  projectHeaderContainer.appendChild(projectHeader);
  projectHeaderContainer.appendChild(projectHeaderBtnContainer);
  tasksPane.insertBefore(projectHeaderContainer, tasksPane.firstChild);
}

function removeProjectHeader() {
  const tasksPane = document.querySelector(".tasks");
  if (tasksPane.querySelector(".project-header-container")) {
    const projectHeader = tasksPane.querySelector(".project-header-container");
    projectHeader.remove();
  }
}

//TASKBAR RELATED

const projectsContainer = document.querySelector(".projects-todo");

function renderProjects() {
  cleanProjects();
  projectsArray.forEach((project) => {
    createProject(project);
  });
}

function cleanProjects() {
  const projects = document.querySelectorAll(".project-item");
  projects.forEach((project) => {
    projectsContainer.removeChild(project);
  });
}

function createProject(projectName) {
  const projectItemContainer = document.createElement("div");
  projectItemContainer.classList.toggle("project-item");
  const project = document.createElement("button");
  project.textContent = projectName;
  project.classList.toggle("project");
  projectItemContainer.appendChild(project);
  projectsContainer.appendChild(projectItemContainer);
}

//NOTES RELATED

function renderNotes() {
  if (document.querySelector(".task")) {
    cleanTasks();
  }
  if (document.querySelectorAll(".add-note-btn")) {
    cleanAddNoteBtn();
  }
  removeProjectHeader();
  cleanNotes();
  appendAddNoteBtn();
  notesLibrary.forEach((item) => {
    createNote(item);
  });
  disableAllNoteEditBtns();
}

function appendAddNoteBtn() {
  const addBtn = document.createElement("button");
  addBtn.classList.toggle("add-note-btn");
  addBtn.textContent = "+";
  tasksContainer.appendChild(addBtn);
}

function cleanAddNoteBtn() {
  const addNoteBtn = document.querySelector(".add-note-btn");
  if (addNoteBtn) {
    tasksContainer.removeChild(addNoteBtn);
  }
}

function cleanNotes() {
  const notes = document.querySelectorAll(".note");
  notes.forEach((note) => {
    tasksContainer.removeChild(note);
  });
}

function createNote(note) {
  const noteElement = document.createElement("div");
  noteElement.appendChild(createNoteEditBtn());
  noteElement.appendChild(createNoteTitle(note));
  noteElement.appendChild(createNoteDeleteBtn());
  noteElement.appendChild(createNoteDescription(note));
  noteElement.classList.toggle("note");
  tasksContainer.appendChild(noteElement);
}

function createNoteTitle(note) {
  const noteTitleContainer = document.createElement("div");
  const noteTitle = document.createElement("input");
  noteTitle.setAttribute("value", note.noteTitle);
  noteTitle.classList.toggle("note-title");
  noteTitle.disabled = true;
  noteTitleContainer.appendChild(noteTitle);
  return noteTitleContainer;
}

function createNoteDoneBtn() {
  const doneBtn = document.createElement("button");
  doneBtn.textContent = "✅";
  doneBtn.classList.toggle("note-done-btn");
  doneBtn.classList.add("note-editing");
  return doneBtn;
}

function createNoteEditBtn() {
  const editBtn = document.createElement("button");
  editBtn.textContent = "🖉";
  editBtn.classList.toggle("note-edit-btn");
  editBtn.classList.add("note-editing");
  return editBtn;
}

function createNoteDeleteBtn() {
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "🗑";
  deleteBtn.classList.toggle("note-delete-btn");
  return deleteBtn;
}

function createNoteDescription(note) {
  const noteDescriptionContainer = document.createElement("div");
  const noteDescription = document.createElement("textarea");
  noteDescription.innerHTML = note.noteDescription;
  noteDescription.setAttribute("rows", "3");
  noteDescription.setAttribute("cols", "20");
  noteDescription.disabled = true;
  noteDescription.classList.toggle("note-description");
  noteDescriptionContainer.appendChild(noteDescription);
  return noteDescriptionContainer;
}

function swapNoteBtns(btn) {
  btn.classList.contains("note-done-btn")
    ? swapNoteDoneBtn(btn)
    : swapNoteEditBtn(btn);
}

function swapNoteDoneBtn(doneBtn) {
  const note = doneBtn.closest(".note");
  doneBtn.remove();
  note.prepend(createNoteEditBtn());
}

function swapNoteEditBtn(editBtn) {
  const note = editBtn.closest(".note");
  editBtn.remove();
  note.prepend(createNoteDoneBtn());
}

function renderNotesEditable() {
  const notes = document.querySelectorAll(".note");
  notes.forEach((note, index) => {
    const noteBtn = note.querySelector(".note-editing");
    if (notesLibrary[index].editFlag === true) {
      if (note.querySelector(".note-edit-btn")) {
        swapNoteBtns(noteBtn);
      }
    } else if (notesLibrary[index].editFlag === false) {
      if (note.querySelector(".note-done-btn")) {
        swapNoteBtns(noteBtn);
      }
    }
  });
}

function renderLatestNoteEditable() {
  const notes = document.querySelectorAll(".note");
  let numberOfNotes = notes.length;
  setNoteEditFlag(true, numberOfNotes - 1);
}

function enableNoteInputs() {
  const notes = document.querySelectorAll(".note");
  notes.forEach((note) => {
    if (note.querySelector(".note-done-btn")) {
      enableNoteInputElements(note);
      enableNoteTextareaElements(note);
    }
  });
}

function disableNoteInputs() {
  const notes = document.querySelectorAll(".note");
  notes.forEach((note) => {
    if (note.querySelector(".note-edit-btn")) {
      disableNoteInputElements(note);
      disableNoteTextAreaElements(note);
    }
  });
}

function enableNoteInputElements(note) {
  let inputFields = note.querySelectorAll("input");
  inputFields.forEach((input) => {
    input.disabled = false;
  });
}

function enableNoteTextareaElements(note) {
  let inputFields = note.querySelectorAll("textarea");
  inputFields.forEach((input) => {
    input.disabled = false;
  });
}

function disableNoteInputElements(note) {
  let inputFields = note.querySelectorAll("input");
  inputFields.forEach((input) => {
    input.disabled = true;
  });
}

function disableNoteTextAreaElements(note) {
  let textAreaFields = note.querySelectorAll("textarea");
  textAreaFields.forEach((textArea) => {
    textArea.disabled = true;
  });
}

function selectNoteTitle(note) {
  const noteTitle = note.querySelector(".note-title");
  noteTitle.select();
}

function deselectNoteTitle(note) {
  const noteTitle = note.querySelector(".note-title");
  noteTitle.focus();
  noteTitle.setSelectionRange(0, 0);
}

function selectLatestNoteTitle() {
  let numberOfNotes = notesLibrary.length;
  const notes = document.querySelectorAll(".note");
  const latestNoteElement = notes[numberOfNotes - 1];
  selectNoteTitle(latestNoteElement);
}

function disableAllNoteEditBtns() {
  const notes = document.querySelectorAll(".note");
  notes.forEach((note) => {
    const editBtn = note.querySelector(".note-edit-btn");
    editBtn.disabled = true;
  });
}
