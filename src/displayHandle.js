import handleProject from './project';

function displayProjects() {
  console.log('before displayinnggg');
  const projectList = document.getElementById('projects-list');
  console.log(projectList);
  console.log('just displayinnggg');
  for (let i = 0; i < window.localStorage.length; i += 1) {
    projectList.innerHTML += `<li id="project-${i + 1}">${window.localStorage.key(i)}</li>`;
  }
  console.log(projectList);
  console.log('displayinnggg');
}

function viewAProject() {
  console.log(this.innerText);
  const projectLi = document.getElementById(this.id);
  const todoList = document.getElementById('project-todos');
  const todos = handleProject.getProject(projectLi.innerText);
  console.log(todos);
  todoList.innerHTML = '';
  for (let i = 0; i < 4; i += 1) {
    todoList.innerHTML += `<li>tsting one two three <span>Due: 1-05-2019</span>
                            <span><a href="#">X</a> </span>
                          </li>`;
  }
}

export { displayProjects, viewAProject };
