import projectManager from "../objects/project-manager";
import { createProjectElement, destroyProjectElement } from "./project-element";
import Project from '../objects/project';
import { toggleActiveNav } from "../functions";
import { showAllTask, showByTaskProject } from "../show-task";
import taskLocalStorage from '../task-local-storage';

function activateProject() {
    toggleActiveNav(this, showByTaskProject, this.textContent);
}

class ProjectContainer {
    constructor() {
        this.container = document.querySelector('.projects-container');
    }

    clearProjects() {
        const n = this.container.children.length - 1;
        for (let i = n; i >= 1; --i) {
            const projectElement = this.container.children[i];

            const projectName = projectElement.querySelector('.project-name');
            projectName.removeEventListener('click', activateProject.bind(projectName));

            const deleteBtn = projectElement.querySelector('.delete-project-btn');
            deleteBtn.addEventListener('click', this.removeProject.bind(this, projectName));

            destroyProjectElement(projectElement);
        }
    }

    renderProjects() {
        this.clearProjects();
        const projects = projectManager.getAllProject();

        for (let i = 1; i < projects.length; ++i) {
            const projectElement = createProjectElement(projects[i]);
            this.container.appendChild(projectElement);

            const projectName = projectElement.querySelector('.project-name');
            projectName.addEventListener('click', activateProject.bind(projectName));

            const deleteBtn = projectElement.querySelector('.delete-project-btn');
            deleteBtn.addEventListener('click', this.removeProject.bind(this, projectName));
        }
    }

    addProject(name) {
        if (projectManager.getProject(name)) {
            alert(name + ' already exist!');
            return;
        }
        projectManager.addProject(name, new Project(name));
        this.renderProjects();
        taskLocalStorage.save();
    }

    removeProject(projectName) {
        projectManager.removeProject(projectName.textContent);
        if (projectName.classList.contains('active')) {
            toggleActiveNav(document.querySelector('.all'), showAllTask);
        }
        this.renderProjects();
        taskLocalStorage.save();
    }
}

export default new ProjectContainer();