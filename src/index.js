import handleTodo from './todo';
import handleProject from './project';

function submitProject() {
  console.log('submiitttt');
  
  const submitButton = document.getElementById('submit-project');
  
  submitButton.addEventListener('click', () => {
    const projName = document.getElementById('project-name').value;
    console.log(projName);
    console.log('button');
    handleProject.createProject(projName);
  });
}

function addTodotoProject() {
  const todo = document.getElementById('todo');
  todo.addEventListener('click', () => {
    console.log('inadding');
    const newTodo = handleTodo.createTodo('Sweet1', 'description', 'dueDate', 'priority', false);
    console.log(newTodo);
    console.log(handleProject.getProject('Youth'));
    handleProject.addTodo('Youth', newTodo);
    console.log(handleProject.getProject('Youth'));
  });
}

const handleTodos = () => {
  window.addEventListener('DOMContentLoaded', () => {
    console.log('domed');
    submitProject();
    addTodotoProject();
    // const todo1 = todo('title', 'description', 'dueDate', 'priority', true);
    // const todo2 = todo('title1', 'description', 'dueDate', 'priority', true);
    // const todo3 = todo('title', 'description2', 'dueDate5', 'priority', false);
    //console.log(raphael.projTodos);
  });
};
handleTodos();
