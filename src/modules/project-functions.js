import { toggleActive } from './function';
import Project from './project';
import ProjectList from './projectList';
import deleteIcon from '../assets/icons/delete-icon.svg';
import { showByTaskProject } from './task-functions';

const projectList = ProjectList.getInstance();

const projectContent = document.querySelector('.nav-list-projects');
let active = '';


function clearProjectContent() {

    for (let i = projectContent.children.length - 1; i >= 0; i--) {
        const child = projectContent.children[i];
        const projectName = child.querySelector('.project-name');
        if (projectName && projectName.classList.contains('active')) {
            active = projectName.textContent;
        }
        projectName.removeEventListener('click', projectNameClick);
        child.remove();
    }
}


function projectNameClick(event) {
    toggleActive(event.target, showByTaskProject, event.target.textContent);
}

function createProjectElement(project) {
    const projectContainer = document.createElement('div');
    const projectName = document.createElement('button');
    const deleteButton = document.createElement('button');

    projectContainer.classList.add('project-container');
    projectName.classList.add('project-name');
    if (project.name == active) {
        projectName.classList.add('active');
    }
    deleteButton.classList.add('delete-project-btn');

    projectName.textContent = project.name;
    deleteButton.innerHTML = deleteIcon;

    projectName.addEventListener('click', projectNameClick);

    projectContainer.appendChild(projectName);
    projectContainer.appendChild(deleteButton);
    return projectContainer;
}

function renderProjects() {
    clearProjectContent();
    for (const project of projectList.getAll()) {
        projectContent.appendChild(createProjectElement(project));
    }
}

function addNewProject(name) {
    if (projectList.get(name)) {
        alert(name + " already exist!");
        return;
    }
    projectList.add(name, new Project(name));
    renderProjects();
}

export {
    addNewProject,
    renderProjects
}