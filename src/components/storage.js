export { storageAvailable, storeNotes, getNotes };

function storageAvailable() {
  let storage;
  try {
    storage = window["localStorage"];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      e.name === "QuotaExceededError" &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

// function storeTasks() {
//   if (storageAvailable()) {
//     localStorage.setItem("taskLibrary", JSON.stringify(taskLibrary));
//     localStorage.setItem(
//       "temporaryTaskLibrary",
//       JSON.stringify(temporaryTaskLibrary)
//     );
//   }
// }

function storeNotes(notesLibrary) {
  if (storageAvailable()) {
    localStorage.setItem("notesLibrary", JSON.stringify(notesLibrary));
  }
}

function getNotes() {
  if (storageAvailable()) {
    if (JSON.parse(localStorage.getItem("notesLibrary"))) {
      return JSON.parse(localStorage.getItem("notesLibrary"));
    } else {
      return [];
    }
  }
}
