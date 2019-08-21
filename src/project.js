function project(name) {
  const todos = [];
  return {
    todos,
    name,
  };
}

const handleProject = (() => {
  const storage = window.localStorage;

  function saveProject(name, proj) {
    storage.setItem(name, JSON.stringify(proj));
  }

  function createProject(projName) {
    const theProject = project(projName);
    saveProject(projName, theProject);
  }

  function getProject(projName) {
    return JSON.parse(storage.getItem(projName));
  }

  function addTodo(projName, newTodo) {
    const theProject = getProject(projName);
    const id = theProject.todos.length + 1;
    theProject.todos.push({ id, ...newTodo });
    saveProject(projName, theProject);
  }

  function deleteTodo(projName, todoId) {
    const theProject = getProject(projName);
    theProject.todos.splice(todoId - 1, 1);
    saveProject(theProject);
  }

  return {
    createProject,
    addTodo,
    deleteTodo,
    getProject,
  };
})();

export default handleProject;
