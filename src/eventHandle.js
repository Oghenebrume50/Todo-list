import handleTodo from './todo';
import handleProject from './project';

function submitProject() {
  const submitButton = document.getElementById('submit-project');
  submitButton.addEventListener('click', () => {
    const projName = document.getElementById('project-name').value;
    handleProject.createProject(projName);
  });
}

function addTodotoProject() {
  const todo = document.getElementById('todo');
  todo.addEventListener('click', () => {
    const newTodo = handleTodo.createTodo('Sweet3', 'description', 'dueDate', 'priority', false);
    handleProject.addTodo('good', newTodo);
  });
}

function deleteTodoFromProject() {
  const todo = document.getElementById('deltodo');
  todo.addEventListener('click', () => {
    handleProject.deleteTodo('good', 2);
  });
}

export { submitProject, addTodotoProject, deleteTodoFromProject };
