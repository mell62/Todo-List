export {
  projectsArray,
  addProject,
  findNumberOfProjects,
  removeProject,
  checkMoreThanOneProject,
};

let projectsArray = ["General"];

function addProject(projectName) {
  projectsArray.push(projectName);
}

function findNumberOfProjects() {
  return projectsArray.length;
}

function removeProject(projectName) {
  let index = projectsArray.indexOf(projectName);
  projectsArray.splice(index, 1);
}

function checkMoreThanOneProject() {
  if (projectsArray.length > 1) {
    return true;
  } else {
    return false;
  }
}
