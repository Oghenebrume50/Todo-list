import handleProject from './project';

function submitProject() {
  const submitButton = document.getElementById('submit-project');
  console.log(submitButton);
  submitButton.addEventListener('click', () => {
    console.log('button');
    handleProject.createProject();
  });
}

const handleTodos = () => {
  window.addEventListener('DOMContentLoaded', () => {
    console.log('domed');
    submitProject();
    // const todo1 = todo('title', 'description', 'dueDate', 'priority', true);
    // const todo2 = todo('title1', 'description', 'dueDate', 'priority', true);
    // const todo3 = todo('title', 'description2', 'dueDate5', 'priority', false);
    //console.log(raphael.projTodos);
  });
};
handleTodos();
