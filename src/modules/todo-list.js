import Task from './task';
import Project from './project'
import deleteIcon from '../assets/icons/delete-icon.svg';
import editIcon from '../assets/icons/edit-icon.svg';
let taskID = 1;
let projectID = 1;

function autoIncrementTaskID() {
    const tmp = taskID;
    ++taskID;
    return tmp;
}

function autoIncrementProjectID() {
    const tmp = projectID;
    ++projectID;
    return tmp;
}

let ungroupTask = [
    new Task({
        id: autoIncrementTaskID(),
        title: 'Go to beach',
        description: 'Just relax',
        due_date: '03-16-2024',
        priority: 'low',
        done: false
    }),
    new Task({
        id: autoIncrementTaskID(),
        title: 'Study',
        description: 'for my science exam',
        due_date: '03-22-2024',
        priority: 'high',
        done: false
    }),
    new Task({
        id: autoIncrementTaskID(),
        title: 'buy a coffee',
        description: '',
        due_date: '03-15-2024',
        priority: 'medium',
        done: false
    })
];

let projects = [];

const taskContent = document.querySelector('.content');
const projectContent = document.querySelector('.nav-list-projects');
const addBtn = document.createElement('button');
addBtn.classList.add('add-btn');
addBtn.textContent = 'Add';

function createTaskElement(id, task) {
    /* Todo item structure:
    <div class="todo-item" id="{index}">
        <input id="item-{index}" type="checkbox">
        <label for="item-{index}">Title</label>
        <button class="detail-btn">details</button>
        <span class="due-date"></span>
        <button class="edit-btn">edit</button>
        <button class="delete-btn">delete</button>
    </div>*/

    const todoItem = document.createElement('div');
    const checkBtn = document.createElement('input');
    const title = document.createElement('label');
    const dueDate = document.createElement('span');
    const editBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');

    todoItem.classList.add('todo-item');
    todoItem.id = id;
    checkBtn.type = 'checkbox';
    checkBtn.id = `item-${id}`;
    title.classList.add('title');

    title.textContent = task.title;
    dueDate.textContent = task.due_date;
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

function clearTasks() {
    taskContent.innerHTML = '';
}
function createProjectElement(project) {
    const projectContainer = document.createElement('div');
    const projectName = document.createElement('h3');
    // const deleteButton = document.createElement('button');

    projectContainer.classList.add('project-container');
    projectName.classList.add('project-name');
    // deleteButton.classList.add('delete-project-btn');

    projectName.textContent = project.name;
    // deleteButton.innerHTML = deleteIcon;

    projectContainer.appendChild(projectName);
    // projectContainer.appendChild(deleteButton);
    return projectContainer;
}

function clearProjectContent() {
    projectContent.innerHTML = '';
}

function showAllTask() {
    clearTasks();
    ungroupTask.forEach((task, index) => {
        const taskElement = createTaskElement(
            index,
            task
        );
        taskContent.appendChild(taskElement);
    });
    taskContent.appendChild(addBtn);
}

function showTodayTask() {
    clearTasks();
    taskContent.textContent = 'Today';
}

function showThisWeekTask() {
    clearTasks();
    taskContent.textContent = 'This Week';
}

function addNewProject(name) {
    projects.push(new Project(autoIncrementProjectID(), name));
    renderProjects();
}

function renderProjects() {
    clearProjectContent();
    for (let project of projects) {
        projectContent.appendChild(createProjectElement(project));
    }
}

export {
    showAllTask,
    showTodayTask,
    showThisWeekTask,
    addNewProject
};