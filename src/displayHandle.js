import handleProject from './project';

let currentProject = 'default project';
let id = 'project-1';
function displayProjects() {
  const projectList = document.getElementById('projects-list');
  for (let i = 0; i < window.localStorage.length; i += 1) {
    projectList.innerHTML += `<li id="project-${i + 1}">${window.localStorage.key(i)}</li>`;
  }
}

function viewAProject() {
  const projectLi = document.getElementById(this.id);
  currentProject = projectLi.innerText;
  id = this.id;
  const todoList = document.getElementById('project-todos');
  const todoObj = handleProject.getProject(projectLi.innerText);
  todoList.innerHTML = '';
  for (let i = 0; i < todoObj.todos.length; i += 1) {
    todoList.innerHTML += `<li>${todoObj.todos[i].title} <span>Due: ${todoObj.todos[i].dueDate}</span>
                            <span id="todo-span-${i}"><a href="#" id="todo-${i}">X</a> </span>
                          </li>`;
  }
}

function initialProjectView() {
  const todoList = document.getElementById('project-todos');
  const todoObj = handleProject.getProject(currentProject);
  todoList.innerHTML = '';
  for (let i = 0; i < todoObj.todos.length; i += 1) {
    todoList.innerHTML += `<li>${todoObj.todos[i].title} <span>Due: ${todoObj.todos[i].dueDate}</span>
                          <span id="todo-span-${i}"><a href="#" id="todo-${i}">X</a> </span>
                        </li>`;
  }
}

function getCurrentProject() { return currentProject; }
function getId() { return id; }
export { displayProjects, viewAProject, getCurrentProject, getId, initialProjectView };
