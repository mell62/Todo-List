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
    alert(
      "Please enable local storage or disable private browsing in your browser to use this application!"
    );
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
    return JSON.parse(localStorage.getItem("notesLibrary"));
  } else {
    return [
      {
        noteTitle: "Please enable your storage",
        noteDescription:
          "Please go to your browser settings and enable local storage to proceed with using this application. Or disable private browsing.",
        editFlag: false,
      },
    ];
  }
}
