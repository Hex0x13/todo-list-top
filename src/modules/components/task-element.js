import editIcon from '../../assets/icons/edit-icon.svg';
import deleteIcon from '../../assets/icons/delete-icon.svg';
import { showEditTask } from './task-modal';
import projectManager from '../objects/project-manager';
import { showTaskByActive } from '../show-task';
import taskLocalStorage from '../task-local-storage';


function editTask(task) {
    showEditTask(task);
    taskLocalStorage.save();
}

function deleteTask(task) {
    projectManager.removeTaskInProject(task);
    showTaskByActive();
    taskLocalStorage.save();
}

function markTask(task) {
    task.done = this.checked;
    taskLocalStorage.save();
}

function createTaskElement(task) {
    const container = document.createElement('div');
    const checkBtn = document.createElement('input');
    const title = document.createElement('label');
    const dueDate = document.createElement('span');
    const editBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');

    container.classList.add('task');
    container.id = task.id;
    checkBtn.type = 'checkbox';
    checkBtn.className = `task-done`;
    title.classList.add('title');

    title.textContent = task.title;
    dueDate.textContent = task.due_date.toLocaleDateString();
    dueDate.classList.add('due-date');
    editBtn.classList.add('edit-btn');
    editBtn.innerHTML = editIcon;
    deleteBtn.classList.add('delete-btn')
    deleteBtn.innerHTML = deleteIcon;
    checkBtn.checked = task.done;

    editBtn.addEventListener('click', editTask.bind(editBtn, task));
    deleteBtn.addEventListener('click', deleteTask.bind(deleteBtn, task));
    checkBtn.addEventListener('change', markTask.bind(checkBtn, task));

    container.appendChild(checkBtn);
    container.appendChild(title);
    container.appendChild(dueDate);
    container.appendChild(editBtn);
    container.appendChild(deleteBtn);

    return container;
}

function destoryTaskElement(taskElement, task) {
    const editBtn = taskElement.querySelector('.edit-btn');
    const deleteBtn = taskElement.querySelector('.delete-btn');
    const checkBtn = taskElement.querySelector('.task-done');
    editBtn.removeEventListener('click', editTask.bind(editBtn, task));
    deleteBtn.removeEventListener('click', deleteTask.bind(deleteBtn, task));
    checkBtn.removeEventListener('change', markTask.bind(checkBtn, task));
    taskElement.remove();
}

export {
    createTaskElement,
    destoryTaskElement
};