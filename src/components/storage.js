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
//   }
// }

// function storeTemporaryTasks() {
//   localStorage.setItem(
//     "temporaryTaskLibrary",
//     JSON.stringify(temporaryTaskLibrary)
//   );
// }

// function getTasks() {
//   if (storageAvailable()) {
//     return JSON.parse(localStorage.getItem("taskLibrary"));
//   } else {
//     return [
//       {
//         taskTitle: "Please enable your storage",
//         project: "Enable Storage",
//         editFlag: false,
//         dueDate: new Date(),
//         taskDescription:
//           "Please go to your browser settings and enable local storage to proceed with using this application. Or disable private browsing.",
//         highPriority: true,
//         mediumPriority: false,
//         lowPriority: false,
//       },
//     ];
//   }
// }

// function getTemporaryTasks() {
//   function getTasks() {
//     if (storageAvailable()) {
//       return JSON.parse(localStorage.getItem("temporaryTaskLibrary"));
//     } else {
//       return [
//         {
//           taskTitle: "Please enable your storage",
//           project: "Enable Storage",
//           editFlag: false,
//           dueDate: new Date(),
//           taskDescription:
//             "Please go to your browser settings and enable local storage to proceed with using this application. Or disable private browsing.",
//           highPriority: true,
//           mediumPriority: false,
//           lowPriority: false,
//         },
//       ];
//     }
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
  }
}
