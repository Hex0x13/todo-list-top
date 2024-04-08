import projectManager from "./objects/project-manager";
import Project from './objects/project';
import { autoIncrement } from "./functions";
import Task from './objects/task';


class TaskLocalStorage {
    constructor() {
        this.task = 'tasks';
        this.project = 'projects';
    }

    save() {
        localStorage.setItem(this.project, JSON.stringify(projectManager.getAllProject()));
    }

    load() {
        const projects = JSON.parse(localStorage.getItem(this.project));
        if (!projects) {
            return;
        }
        projects.forEach(project => {
            const newProject = new Project(project.name);
            projectManager.addProject(project.name, newProject);

            newProject.addList(
                Object.values(project.tasks).map(task => new Task(Object.assign(task, {id: autoIncrement(), due_date: new Date(task.due_date)})))
            );
        });
    }
}


export default new TaskLocalStorage();