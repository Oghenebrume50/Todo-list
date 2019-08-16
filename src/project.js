import handleTodo from './todo';

function project(name) {
  const todos = [];
  return {
    todos,
    name,
  };
}

const handleProject = (() => {
  const storage = window.localStorage;

  function saveProject(proj) {
    console.log(proj + ' savingggggg');
    storage.setItem(proj.name, JSON.stringify(proj));
  }

  function createProject(projName) {
    console.log(projName);
    const theProject = project(projName);
    saveProject(theProject);
  }

  function getProject(projName) {
    return JSON.parse(storage.getItem(projName));
  }

  function renameProject(projName, newName) {
    const theProject = getProject(projName);
    theProject.editName(newName);
  }

  function addTodo(projName, newTodo) {
    console.log('in hereeee');
    const theProject = getProject(projName);
    console.log(theProject);
    //const newTodo = handleTodo.createTodo(...todoDetails);
    theProject.todos.push(newTodo);
    console.log(theProject);
    saveProject(theProject);
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
