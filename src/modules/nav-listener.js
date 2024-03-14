import { toggleActive } from './function';
import { showAllTask } from './todo-list';
import { showTodayTask } from './todo-list';
import { showThisWeekTask } from './todo-list';
import { addNewProject } from './todo-list';

const allBtn = document.querySelector('.all');
const todayBtn = document.querySelector('.today');
const weekBtn = document.querySelector('.week');
const addProjectBtn = document.querySelector('.add-project-btn');
const addProjectInput = document.querySelector('.add-project-input');
const addBtnProject = addProjectInput.querySelector('.add-button');
const cancelBtnProject = addProjectInput.querySelector('.cancel-button');
const projectNameInput = addProjectInput.querySelector('input');

allBtn.onclick = showAll;
todayBtn.onclick = showToday;
weekBtn.onclick = showWeek;
addProjectBtn.onclick = addProject;
addBtnProject.onclick = confirmProject;
cancelBtnProject.onclick = cancelProject;

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