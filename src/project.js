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
    storage.setItem(proj.name, JSON.stringify(proj));
  }

  function createProject(projName) {
    const theProject = project(projName);
    saveProject(theProject);
  }

  function getProject(projName) {
    return JSON.parse(storage.getItem(projName));
  }

  function addTodo(projName, newTodo) {
    const theProject = getProject(projName);
    const id = theProject.todos.length + 1;
    theProject.todos.push({ id, ...newTodo });
    saveProject(theProject);
  }

  function deleteTodo(projName, todoId) {
    const theProject = getProject(projName);
    theProject.todos.splice(todoId - 1, 1);
    saveProject(theProject);
  }

  function deleteProject(projName) {
    storage.removeItem(projName);
  }


  return {
    createProject,
    addTodo,
    deleteTodo,
    getProject,
    deleteProject,
  };
})();

export default handleProject;
