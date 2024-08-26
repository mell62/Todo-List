export { projectsArray, addProject, findNumberOfProjects };

let projectsArray = ["General"];

function addProject(projectName) {
  projectsArray.push(projectName);
}

function findNumberOfProjects() {
  return projectsArray.length;
}
