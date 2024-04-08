import { createAddTaskButton, destroyAddTaskButton } from "./components/task-modal";
import projectManager from "./objects/project-manager";
import { createTaskElement, destoryTaskElement } from "./components/task-element";


const taskContent = document.querySelector('.content');

function clearTasks() {
    const tasksElem = document.querySelectorAll('.task');
    const tasks = projectManager.getAllTask();
    for (let i = 0; i < tasksElem.length; ++i) {
        destoryTaskElement(tasksElem[i], tasks[i]);
    }
    destroyAddTaskButton();
}

function showAllTask() {
    clearTasks();
    projectManager.getAllTask().forEach(element => {
        taskContent.appendChild(createTaskElement(element));
    });
    taskContent.appendChild(createAddTaskButton());
}

function showByTaskProject(key) {
    clearTasks();
    projectManager.getProjectTasks(key).forEach(element => {
        taskContent.appendChild(createTaskElement(element));
    });
    taskContent.appendChild(createAddTaskButton());
}

function showTodayTask() {
    clearTasks();
    projectManager.getAllTask().forEach(element => {
        const due = element.due_date;
        const current = new Date();
        const cmp = [
            due.getFullYear() - current.getFullYear(),
            due.getMonth() - current.getMonth(),
            due.getDate() - current.getDate()
        ];

        if (cmp.every(val => val === 0)) {
            taskContent.appendChild(createTaskElement(element));
        }
    });
    taskContent.appendChild(createAddTaskButton());
}

function showThisWeekTask() {
    clearTasks();
    projectManager.getAllTask().forEach(element => {
        const due = element.due_date;
        const current = new Date();
        const cmp = [
            due.getFullYear() - current.getFullYear(),
            due.getMonth() - current.getMonth(),
            due.getDate() - current.getDate()
        ];

        if (cmp.every(val => val >= 0 && val < 7)) {
            taskContent.appendChild(createTaskElement(element));
        }
    });
    taskContent.appendChild(createAddTaskButton());
}

function showTaskByActive() {
    const key = document.querySelector('.active').textContent;
    switch (key) {
        case 'All':
            showAllTask();
            break;
        case 'Today':
            showTodayTask();
            break;
        case 'Week':
            showThisWeekTask();
            break;
        default:
            showByTaskProject(key);
            break;
    }
}

export {
    showAllTask,
    showByTaskProject,
    showThisWeekTask,
    showTodayTask,
    showTaskByActive
};