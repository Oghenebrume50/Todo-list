import todo from './todo';

function project(name) {
  let projName = name;
  const projTodos = [];

  const editName = (newName) => { projName = newName; };
  const addTodo = (task) => { projTodos.push(task); };
  return {
    projTodos,
    projName,
    editName,
    addTodo,
  };
}

const handleProject = (() => {
  const storage = window.localStorage;

  function saveProject(projName) {
    const newProj = project(projName);
    storage.setItem(projName, newProj);
  }

  function createProject() {
    const newProjName = document.getElementById('project-name').value;
    saveProject(newProjName);
  }

  function getProject(projName) {
    return storage.getItem(projName);
  }

  function renameProject(projName, newName) {
    const theProject = getProject(projName);
    theProject.editName(newName);
  }

  function addTodo(projName, task) {
    const theProject = getProject(projName);
    theProject.addTodo(task);
  }

  function deleteProject(projName) {
    storage.removeItem(projName);
  }


  return {
    createProject,
    addTodo,
    renameProject,
    getProject,
    deleteProject,
  };
})();

export default handleProject;
