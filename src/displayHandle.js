import handleTodo from './todo';
import handleProject from './project';

let currentProject = 'default project';
let id = 'project-1';
let toggle = 0;
let todoId = '';

function changeTitle() {
  const title = document.getElementById('project-title');
  title.innerText = currentProject;
}

function displayProjects() {
  const projectList = document.getElementById('projects-list');
  changeTitle();
  for (let i = 0; i < window.localStorage.length; i += 1) {
    projectList.innerHTML += ` <button id="project-${i + 1}" class="project-button">
    ${window.localStorage.key(i)}</button>`;
  }
}

function deleteTodo() {
  const parentElm = this.parentElement.id;
  const projectLi = document.getElementById(id);
  handleProject.deleteTodo(currentProject, Number(parentElm.slice(parentElm.length - 1)));
  viewAProject.call(projectLi);
}

function expand() {
  const parentElm = this.parentElement.id;
  const description = document.querySelector(`#${parentElm} .description-container`);
  if (!toggle) {
    toggle = 1;
    description.classList.remove('hide');
    description.classList.add('show');
  } else {
    toggle = 0;
    description.classList.remove('show');
    description.classList.add('hide');
  }
}

function fillForm(title, description, dueDate, todoPriority, todoStatus) {
  document.getElementById('edit-todo-title').value = title;
  document.getElementById('edit-todo-desc').value = description;
  document.getElementById('edit-todo-due-date').value = dueDate;
  document.getElementById('edit-todo-priority').value = todoPriority;
  document.getElementById('edit-todo-done').checked = todoStatus;
}

function editTodo() {
  const todoForm = document.getElementById('edit-todo-form');
  todoId = Number(this.id.slice(this.id.length - 1));
  const t = handleProject.getTodo(currentProject, todoId);
  const { title, description, dueDate, todoPriority, todoStatus } = t;
  fillForm(title, description, dueDate, todoPriority, todoStatus);
  todoForm.classList.remove('todo-form-hide');
  todoForm.classList.add('todo-form-show');
}

function populateTodoView() {
  const todoList = document.getElementById('project-todos');
  changeTitle();
  const todoObj = handleProject.getProject(currentProject);
  todoList.innerHTML = '';
  for (let i = 0; i < todoObj.todos.length; i += 1) {
    todoList.innerHTML += `<div class="todo-item" id="todo-item-${i}">
    <button class="todo-item-button ${todoObj.todos[i].todoPriority === 'high' ? ' high-priority' : ''}" 
    id="todo-btn-${i}">
    ${todoObj.todos[i].title}</button>
    <span>Due: ${todoObj.todos[i].dueDate}</span>
    <button class="btn-warning" id="todo-edit-btn-${i}">Edit</button> |
    <button class="btn-danger" id="todo-del-btn-${i}">Delete</button>
    <div class="description-container hide">
      <p>
        ${todoObj.todos[i].description}
      </p>
    </div>
    <hr />
  </div>
  `;
    const title = document.getElementById(`todo-btn-${i}`);
    if (todoObj.todos[i].todoStatus === true) {
      title.classList.remove('high-priority');
      title.classList.add('done-task');
    }
  }
}

function viewAProject() {
  const projectLi = document.getElementById(this.id);
  currentProject = projectLi.innerText;
  id = this.id;
  populateTodoView();
  const todoObj = handleProject.getProject(currentProject);
  for (let i = 0; i < todoObj.todos.length; i += 1) {
    const delButton = document.querySelector(`#todo-del-btn-${i}`);
    const expButton = document.querySelector(`#todo-btn-${i}`);
    const editButton = document.querySelector(`#todo-edit-btn-${i}`);
    editButton.addEventListener('click', editTodo);
    delButton.addEventListener('click', deleteTodo);
    expButton.addEventListener('click', expand);
  }
}

function showAddTodoForm() {
  const todoForm = document.getElementById('add-todo-form');
  document.getElementById('todo-title').value = '';
  document.getElementById('todo-desc').value = '';
  document.getElementById('todo-due-date').value = '';
  document.getElementById('todo-priority').value = '';
  document.getElementById('todo-done').checked = false;
  todoForm.classList.remove('todo-form-hide');
  todoForm.classList.add('todo-form-show');
}

function submitAddTodoForm() {
  const proj = document.getElementById(id);
  const todoForm = document.getElementById('add-todo-form');
  const todoTitle = document.getElementById('todo-title').value;
  const todoDesc = document.getElementById('todo-desc').value;
  const todoDate = document.getElementById('todo-due-date').value;
  const todoPriority = document.getElementById('todo-priority').value;
  const todoDone = document.getElementById('todo-done').checked;
  const newTodo = handleTodo.createTodo(
    todoTitle,
    todoDesc,
    todoDate,
    todoPriority,
    todoDone,
  );
  handleProject.addTodo(currentProject, newTodo);
  todoForm.classList.remove('todo-form-show');
  todoForm.classList.add('todo-form-hide');
  viewAProject.call(proj);
}

function getFormdetails() {
  const title = document.getElementById('edit-todo-title').value;
  const description = document.getElementById('edit-todo-desc').value;
  const dueDate = document.getElementById('edit-todo-due-date').value;
  const todoPriority = document.getElementById('edit-todo-priority').value;
  const todoStatus = document.getElementById('edit-todo-done').checked;

  return { title, description, dueDate, todoPriority, todoStatus };
}

function submitEditTodo() {
  const todoForm = document.getElementById('edit-todo-form');
  const projectLi = document.getElementById(id);
  const edittedTodo = getFormdetails();
  handleProject.editTodo(currentProject, todoId, edittedTodo);
  viewAProject.call(projectLi);
  todoForm.classList.remove('todo-form-show');
  todoForm.classList.add('todo-form-hide');
}

function initialProjectView() {
  populateTodoView();
}

export { displayProjects,
  viewAProject,
  showAddTodoForm,
  submitAddTodoForm,
  initialProjectView,
  expand,
  deleteTodo,
  editTodo,
  submitEditTodo };
