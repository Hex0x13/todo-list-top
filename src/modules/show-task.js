import { createAddTaskModal } from "./components/add-task-modal";
import projectManager from "./objects/project-manager";
import { createTaskElement } from "./components/task-element";


const taskContent = document.querySelector('.content');

function clearTasks() {
    taskContent.innerHTML = '';
}

function showAllTask() {
    clearTasks();
    projectManager.getAllTask().forEach(element => {
        taskContent.appendChild(createTaskElement(element));
    });
    taskContent.appendChild(createAddTaskModal());
}

function showByTaskProject(key) {
    clearTasks();
    projectManager.getProjectTasks(key).forEach(element => {
        taskContent.appendChild(createTaskElement(element));
    });
    taskContent.appendChild(createAddTaskModal());
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
    taskContent.appendChild(createAddTaskModal());
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
    taskContent.appendChild(createAddTaskModal());
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