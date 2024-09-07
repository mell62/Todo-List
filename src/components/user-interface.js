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
  renderProjectHeaderEditable,
  enableProjectHeader,
  disableProjectHeader,
  renderNotes,
  swapNoteBtns,
  selectLatestNoteTitle,
  deselectNoteTitle,
  renderNotesEditable,
  renderLatestNoteEditable,
  enableNoteInputs,
  disableNoteInputs,
  activateTaskbarBtn,
  addActivatedProjectStyle,
};
import {
  taskLibrary,
  scrollAuto,
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
  const firstSection = document.createElement("div");
  const secondSection = document.createElement("div");
  const thirdSection = document.createElement("div");
  const fourthSection = document.createElement("div");
  taskElement.classList.toggle("task");
  firstSection.classList.toggle("task-first-section");
  secondSection.classList.toggle("task-second-section");
  thirdSection.classList.toggle("task-third-section");
  fourthSection.classList.toggle("task-fourth-section");
  firstSection.appendChild(createEditBtn());
  firstSection.appendChild(createDeleteBtn());
  secondSection.appendChild(createTaskTitle(task));
  secondSection.appendChild(createProjectInput(task));
  secondSection.appendChild(createTaskDescription(task));
  thirdSection.appendChild(createDatePicker(task));
  thirdSection.appendChild(createPriorities());
  fourthSection.appendChild(createFinishBtn());
  taskElement.appendChild(firstSection);
  taskElement.appendChild(secondSection);
  taskElement.appendChild(thirdSection);
  taskElement.appendChild(fourthSection);
  tasksContainer.appendChild(taskElement);
  scrollAuto(taskElement);
}

function createTaskTitle(task) {
  const taskTitleContainer = document.createElement("div");
  taskTitleContainer.classList.toggle("task-title-container");
  const taskTitle = document.createElement("input");
  const taskTitleLabel = document.createElement("label");
  taskTitle.setAttribute("value", task.taskTitle);
  taskTitle.classList.toggle("task-title");
  taskTitle.id = "task-title";
  taskTitle.disabled = true;
  taskTitleLabel.setAttribute("for", "task-title");
  taskTitleLabel.textContent = "Task";
  taskTitleContainer.appendChild(taskTitleLabel);
  taskTitleContainer.appendChild(taskTitle);
  return taskTitleContainer;
}

function createProjectInput(task) {
  const projectInputContainer = document.createElement("div");
  projectInputContainer.classList.toggle("project-input-container");
  const projectInput = document.createElement("select");
  const projectInputLabel = document.createElement("label");
  projectInput.classList.toggle("project-field");
  projectInput.id = "task-project";
  projectsArray.forEach((project) => {
    const projectOption = document.createElement("option");
    projectOption.setAttribute("value", project);
    projectOption.textContent = project;
    projectInput.appendChild(projectOption);
  });
  projectInput.value = task.project;
  projectInput.disabled = true;
  projectInputLabel.setAttribute("for", "task-project");
  projectInputLabel.textContent = "Project";
  projectInputContainer.appendChild(projectInputLabel);
  projectInputContainer.appendChild(projectInput);
  return projectInputContainer;
}

function createDoneBtn() {
  const doneBtn = document.createElement("button");
  doneBtn.classList.toggle("done-btn");
  doneBtn.classList.add("task-editing");
  return doneBtn;
}

function createEditBtn() {
  const editBtn = document.createElement("button");
  editBtn.classList.toggle("edit-btn");
  editBtn.classList.add("task-editing");
  return editBtn;
}

function createDeleteBtn() {
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.toggle("delete-btn");
  return deleteBtn;
}

function createTaskDescription(task) {
  const taskDescriptionContainer = document.createElement("div");
  taskDescriptionContainer.classList.toggle("task-description-container");
  const taskDescription = document.createElement("textarea");
  const taskDescriptionLabel = document.createElement("label");
  taskDescription.innerHTML = task.taskDescription;
  taskDescription.setAttribute("placeholder", "Describe your task...");
  taskDescription.setAttribute("rows", "3");
  taskDescription.setAttribute("cols", "20");
  taskDescription.id = "task-description";
  taskDescription.disabled = true;
  taskDescription.classList.toggle("task-description");
  taskDescriptionLabel.setAttribute("for", "task-description");
  taskDescriptionLabel.textContent = "Description";
  taskDescriptionContainer.appendChild(taskDescriptionLabel);
  taskDescriptionContainer.appendChild(taskDescription);
  return taskDescriptionContainer;
}

function createDatePicker(task) {
  const datePickerContainer = document.createElement("div");
  datePickerContainer.classList.toggle("date-picker-container");
  const datePicker = document.createElement("input");
  const datePickerLabel = document.createElement("label");
  datePicker.setAttribute("type", "date");
  datePicker.setAttribute("value", task.dueDate);
  datePicker.classList.toggle("date-picker");
  datePicker.disabled = true;
  datePicker.id = "task-duedate";
  datePickerLabel.setAttribute("for", "task-duedate");
  datePickerLabel.textContent = "Due:";
  datePickerContainer.appendChild(datePickerLabel);
  datePickerContainer.appendChild(datePicker);
  return datePickerContainer;
}

function createPriorities() {
  const priorityContainer = document.createElement("div");
  const priorityBtnContainer = document.createElement("div");
  const highPriorityBtn = document.createElement("button");
  const mediumPriorityBtn = document.createElement("button");
  const lowPriorityBtn = document.createElement("button");
  const priorityLabel = document.createElement("div");

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

  priorityLabel.classList.toggle("priority-label");
  priorityLabel.textContent = "Priority";

  priorityContainer.classList.toggle("priority-container");
  priorityBtnContainer.classList.toggle("priority-btn-container");

  priorityBtnContainer.appendChild(highPriorityBtn);
  priorityBtnContainer.appendChild(mediumPriorityBtn);
  priorityBtnContainer.appendChild(lowPriorityBtn);
  priorityContainer.appendChild(priorityLabel);
  priorityContainer.appendChild(priorityBtnContainer);

  return priorityContainer;
}

function createFinishBtn() {
  const finishBtn = document.createElement("button");

  finishBtn.classList.toggle("finish-task-btn");

  finishBtn.textContent = "Finish!";

  return finishBtn;
}

function swapBtns(btn) {
  btn.classList.contains("done-btn") ? swapDoneBtn(btn) : swapEditBtn(btn);
}

function swapDoneBtn(doneBtn) {
  const container = doneBtn.closest(".task-first-section");
  const deleteBtn = container.querySelector(".delete-btn");
  doneBtn.remove();
  container.insertBefore(createEditBtn(), deleteBtn);
}

function swapEditBtn(editBtn) {
  const container = editBtn.closest(".task-first-section");
  const deleteBtn = container.querySelector(".delete-btn");
  editBtn.remove();
  container.insertBefore(createDoneBtn(), deleteBtn);
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
  const projectHeader = document.createElement("input");

  projectHeaderContainer.classList.toggle("project-header-container");
  projectHeader.classList.toggle("project-header");

  projectHeader.value = projectName;
  projectHeader.disabled = true;

  projectHeaderContainer.appendChild(projectHeader);
  projectHeaderContainer.appendChild(createRenameProjectBtn());
  projectHeaderContainer.appendChild(createDeleteProjectBtn());
  tasksPane.insertBefore(projectHeaderContainer, tasksPane.firstChild);
}

function removeProjectHeader() {
  const tasksPane = document.querySelector(".tasks");
  if (tasksPane.querySelector(".project-header-container")) {
    const projectHeader = tasksPane.querySelector(".project-header-container");
    projectHeader.remove();
  }
}

function createRenameProjectBtn() {
  const projectHeaderBtnContainer = document.createElement("div");
  const renameProjectBtn = document.createElement("button");
  renameProjectBtn.classList.toggle("rename-project-btn");
  renameProjectBtn.classList.toggle("project-header-editing");
  renameProjectBtn.textContent = "🖉";
  projectHeaderBtnContainer.appendChild(renameProjectBtn);
  return projectHeaderBtnContainer;
}

function createSetProjectBtn() {
  const projectHeaderBtnContainer = document.createElement("div");
  const setProjectBtn = document.createElement("button");
  setProjectBtn.classList.toggle("set-project-btn");
  setProjectBtn.classList.toggle("project-header-editing");
  setProjectBtn.textContent = "✅";
  projectHeaderBtnContainer.appendChild(setProjectBtn);
  return projectHeaderBtnContainer;
}

function createDeleteProjectBtn() {
  const projectDeleteBtnContainer = document.createElement("div");
  const deleteProjectBtn = document.createElement("button");
  deleteProjectBtn.classList.toggle("delete-project-btn");
  deleteProjectBtn.textContent = "🗑";
  projectDeleteBtnContainer.appendChild(deleteProjectBtn);
  return projectDeleteBtnContainer;
}

function swapProjectHeaderBtn(btn) {
  btn.classList.contains("set-project-btn")
    ? swapSetProjectBtn(btn)
    : swapRenameProjectBtn(btn);
}

function swapSetProjectBtn(setProjectBtnContainer) {
  const parentContainer = setProjectBtnContainer.closest(
    ".project-header-container"
  );
  setProjectBtnContainer.remove();
  parentContainer.appendChild(createRenameProjectBtn());
}

function swapRenameProjectBtn(renameProjectBtnContainer) {
  const parentContainer = renameProjectBtnContainer.closest(
    ".project-header-container"
  );
  renameProjectBtnContainer.remove();
  parentContainer.appendChild(createSetProjectBtn());
}

function renderProjectHeaderEditable() {
  const projectContainer = document.querySelector(".project-header-container");
  const projectHeaderBtn = projectContainer.querySelector(
    ".project-header-editing"
  );
  if (projectContainer.querySelector(".rename-project-btn")) {
    swapProjectHeaderBtn(projectHeaderBtn);
  } else if (projectContainer.querySelector(".set-project-btn")) {
    swapProjectHeaderBtn(projectHeaderBtn);
  }
}

function enableProjectHeader() {
  const projectHeaderContainer = document.querySelector(
    ".project-header-container"
  );
  const projectHeader = document.querySelector(".project-header");
  if (projectHeaderContainer.querySelector(".set-project-btn")) {
    projectHeader.disabled = false;
  }
}

function disableProjectHeader() {
  const projectHeaderContainer = document.querySelector(
    ".project-header-container"
  );
  const projectHeader = document.querySelector(".project-header");
  if (projectHeaderContainer.querySelector(".rename-project-btn")) {
    projectHeader.disabled = true;
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
  project.classList.toggle("taskbar-btn");
  projectItemContainer.appendChild(project);
  projectsContainer.appendChild(projectItemContainer);
}

function addActivatedProjectStyle(index) {
  const projectElements = document.querySelectorAll(".project");
  if (index) {
    projectElements[index - 1].classList.add("taskbar-btn-activate");
  }
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
  scrollAuto(noteElement);
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

//STYLING

function removeTaskbarBtnActivation() {
  const taskbarBtns = document.querySelectorAll(".taskbar-btn");
  taskbarBtns.forEach((btn) => {
    btn.classList.remove("taskbar-btn-activate");
  });
}

function addTaskbarBtnActivation(btn) {
  btn.classList.add("taskbar-btn-activate");
}

function activateTaskbarBtn(btn) {
  removeTaskbarBtnActivation();
  addTaskbarBtnActivation(btn);
}
