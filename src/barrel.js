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
} from "./components/user-interface.js";

export {
  taskFactory,
  taskLibrary,
  addTask,
  removeTask,
  setEditFlag,
  togglePriority,
  removeAllTasks,
  moveAllTasks,
  removeAllTemporaryTasks,
  revertTaskLibrary,
  removeTemporaryTask,
} from "./components/task-library.js";

export {
  deleteTask,
  deleteTemporaryTask,
  saveTask,
  setDateLimit,
  findTaskEditingStatus,
  sortTaskLibrary,
  loadTodaysTasks,
  loadThisWeeksTasks,
  loadProjectTasks,
  deleteNote,
  saveNote,
  findNoteEditingStatus,
} from "./components/main.js";

export {
  projectsArray,
  addProject,
  findNumberOfProjects,
} from "./components/projects.js";

export {
  notesLibrary,
  addNote,
  removeNote,
  removeAllNotes,
  setNoteEditFlag,
} from "./components/notes.js";
