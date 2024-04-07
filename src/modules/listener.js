import { toggleActive } from './function';

import { showAllTask } from './task-functions';
import { showTodayTask } from './task-functions';
import { showThisWeekTask } from './task-functions';

import { addNewProject } from './project-functions';
import { addNewTask } from './task-functions';
import { closeModal } from './add-task-modal';

const allBtn = document.querySelector('.all');
const todayBtn = document.querySelector('.today');
const weekBtn = document.querySelector('.week');
const addProjectBtn = document.querySelector('.add-project-btn');
const addProjectInput = document.querySelector('.add-project-input');
const addBtnProject = addProjectInput.querySelector('.add-button');
const cancelBtnProject = addProjectInput.querySelector('.cancel-button');
const projectNameInput = addProjectInput.querySelector('input');
const form = document.querySelector('form');

allBtn.onclick = showAll;
todayBtn.onclick = showToday;
weekBtn.onclick = showWeek;
addProjectBtn.onclick = addProject;
addBtnProject.onclick = confirmProject;
cancelBtnProject.onclick = cancelProject;
form.addEventListener('submit', submit);

function showAll() {
    toggleActive(allBtn, showAllTask);
}

function showToday() {
    toggleActive(todayBtn, showTodayTask);
}

function showWeek() {
    toggleActive(weekBtn, showThisWeekTask);
}

function addProject() {
    addProjectBtn.classList.add('hide-element');
    addProjectInput.classList.remove('hide-element');
}

function confirmProject() {
    if (projectNameInput.value == '') {
        return;
    }
    addNewProject(projectNameInput.value);
    projectNameInput.value = '';
    addProjectBtn.classList.remove('hide-element');
    addProjectInput.classList.add('hide-element');
}

function cancelProject() {
    addProjectBtn.classList.remove('hide-element');
    addProjectInput.classList.add('hide-element');
}

function submit(event) {
    event.preventDefault();
    if (form.checkValidity()) {
        const title = form.elements['title'].value;
        const description = form.elements['description'].value;
        const due_date = form.elements['due-date'].value;
        const project = form.elements['project'].value;
        const priority = form.elements['priority'].value;
        addNewTask(title, description, due_date, project, priority);
        closeModal();
    }
}