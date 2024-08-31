export { notesLibrary, addNote, removeNote, setNoteEditFlag };

let notesFactory = (title) => {
  let noteTitle = title;
  let noteDescription = "";
  let editFlag = false;
  return { noteTitle, noteDescription, editFlag };
};

let defaultNote = notesFactory("Sample note");

let notesLibrary = [defaultNote];

function addNote(title) {
  let newNote = notesFactory(title);
  notesLibrary.push(newNote);
}

function removeNote(index) {
  notesLibrary.splice(index, 1);
}

function setAllEditFlagsFalse() {
  notesLibrary.forEach((note) => {
    note.editFlag = false;
  });
}

function setNoteEditFlag(state, index) {
  if (typeof state === "boolean") {
    setAllEditFlagsFalse();
    notesLibrary[index].editFlag = state;
  }
}
