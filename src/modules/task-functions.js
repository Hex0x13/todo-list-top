import Task from './task';
import { toDate } from './function';
import { createAddTaskBtn } from './add-task-modal';;
import ProjectList from './projectList';

import { autoIncrementTaskID } from './todo-list';
import editIcon from '../assets/icons/edit-icon.svg';
import deleteIcon from '../assets/icons/delete-icon.svg';

const projectList = ProjectList.getInstance();
const taskContent = document.querySelector('.content');

function createTaskElement(task) {
    const todoItem = document.createElement('div');
    const checkBtn = document.createElement('input');
    const title = document.createElement('label');
    const dueDate = document.createElement('span');
    const editBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');

    todoItem.classList.add('task');
    todoItem.id = task.id;
    checkBtn.type = 'checkbox';
    checkBtn.id = `item-${task.id}`;
    title.classList.add('title');

    title.textContent = task.title;
    const year = task.due_date.getFullYear();
    const month = ('0' + (task.due_date.getMonth() + 1)).slice(-2);
    const date = ('0' + task.due_date.getDate()).slice(-2);
    dueDate.textContent = `${month}-${date}-${year}`;
    dueDate.classList.add('due-date');
    editBtn.classList.add('edit-btn');
    editBtn.innerHTML = editIcon;
    deleteBtn.classList.add('delete-btn')
    deleteBtn.innerHTML = deleteIcon;

    todoItem.appendChild(checkBtn);
    todoItem.appendChild(title);
    todoItem.appendChild(dueDate);
    todoItem.appendChild(editBtn);
    todoItem.appendChild(deleteBtn);

    return todoItem;
}

function addNewTask(title, description, due_date, project, priority) {
    projectList.get(project).addTask(new Task({ id: autoIncrementTaskID(), title, description, due_date: toDate(due_date), priority, done: false }));
    showTaskByActive();
}

function clearTasks() {
    taskContent.innerHTML = '';
}


function showAllTask() {
    clearTasks();
    projectList.getAll().forEach((project) => {
        project.getAllTask().forEach((task) => {
            const taskElement = createTaskElement(task);
            taskContent.appendChild(taskElement);
        });
    });
    taskContent.appendChild(createAddTaskBtn());
}

function showByTaskProject(key) {
    clearTasks();
    projectList.get(key).getAllTask().forEach((task) => {
        const taskElement = createTaskElement(
            task
        );
        taskContent.appendChild(taskElement);
    });
    taskContent.appendChild(createAddTaskBtn());
}

function showTodayTask() {
    clearTasks();
    projectList.getAll().forEach((project) => {
        project.getAllTask().forEach((task) => {
            const due = task.due_date.getTime();
            const current = (new Date()).getTime();
            const diff = (due - current) / (1000 * 3600);
            if (diff >= 0 && diff < 24) {
                const taskElement = createTaskElement(task);
                taskContent.appendChild(taskElement);
            }
        });
    });
    taskContent.appendChild(createAddTaskBtn());
}

function showThisWeekTask() {
    clearTasks();
    projectList.getAll().forEach((project) => {
        project.getAllTask().forEach((task) => {
            const due = task.due_date.getTime();
            const current = (new Date()).getTime();
            const diff = (due - current) / (1000 * 3600 * 24);
            if (diff >= 0 && diff <= 7) {
                const taskElement = createTaskElement(task);
                taskContent.appendChild(taskElement);
            }
        });
    });
    taskContent.appendChild(createAddTaskBtn());
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
    showTodayTask,
    showThisWeekTask,
    addNewTask
};