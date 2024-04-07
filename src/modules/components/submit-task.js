import { closeModal } from './add-task-modal';
import Task from '../objects/task';
import { autoIncrement } from '../functions';
import projectManager from '../objects/project-manager';
import { showTaskByActive } from '../show-task';

function submit(event) {
    event.preventDefault();
    if (form.checkValidity()) {
        const title = form.elements['title'].value;
        const description = form.elements['description'].value;
        const due_date = form.elements['due-date'].value;
        const priority = form.elements['priority'].value;

        const project = form.elements['project'].value;
        const task = new Task({
            id: autoIncrement(),
            title: title,
            description: description,
            due_date: new Date(due_date),
            priority: priority,
            done: false
        });

        projectManager.addTaskInProject(project, task);
        showTaskByActive();
        closeModal();
        form.reset(); 
    }
}


const form = document.querySelector('.add-task-form');
form.addEventListener('submit', submit);