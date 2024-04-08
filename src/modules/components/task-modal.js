import '../../assets/styles/task-modal.css';
import { formatDate } from '../functions';


const modal = document.getElementById('task-modal');
const closeSpan = document.querySelector('.close');
const modalInputs = Array.from(modal.querySelectorAll('input,select'));
const navListProject = document.querySelector('.projects-container');
const taskForm = document.querySelector('.task-form');

function loadProjectOpts() {
    const taskProject = document.querySelector('#task-project');
    const active = document.querySelector('.active').textContent;
    taskProject.innerHTML = '';

    navListProject.querySelectorAll('.project-name').forEach((element, index) => {
        const opt = document.createElement('option');
        opt.setAttribute('value', element.textContent);
        opt.textContent = element.textContent;
        taskProject.appendChild(opt);
        if (opt.value === active) {
            taskProject.selectedIndex = index;

        }
    });
}

function closeModal() {
    taskForm.reset();
    modal.style.display = 'none';
}

function showModal() {
    modal.style.display = 'block';
    modal.querySelector('#title').focus();
    loadProjectOpts();
}

closeSpan.onclick = () => {
    closeModal();
}

window.onclick = (event) => {
    if (event.target == modal) {
        closeModal();
    }
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'Tab' && modal.style.display === 'block') {
        if (document.activeElement === modalInputs[modalInputs.length - 1]) {
            document.querySelector('.add-btn').focus();
        } else if (!modalInputs.includes(document.activeElement)) {
            event.preventDefault();
        }
    }
});



function createAddTaskButton() {
    const addBtn = document.createElement('button');
    addBtn.classList.add('add-btn');
    addBtn.textContent = 'Add';
    addBtn.addEventListener('click', showModal);

    return addBtn;
}

function destroyAddTaskButton() {
    const addBtn = document.querySelector('.add-btn');
    if (addBtn) {
        addBtn.addEventListener('click', showModal);
        addBtn.remove();
    }
}

function showEditTask(task) {
    taskForm.elements['title'].value = task.title;
    taskForm.elements['description'].value = task.description;
    taskForm.elements['due-date'].value = formatDate(task.due_date);
    taskForm.elements['priority'].value = task.priority;
    const selectElem = taskForm.elements['project'];

    for (let i = 0; i < selectElem.length; ++i) {
        if (selectElem.options[i].value === task.project_name) {
            selectElem.selectedIndex = i;
        }
    }
    modal.style.display = 'block';
    modal.querySelector('#title').focus();
}

export {
    createAddTaskButton,
    destroyAddTaskButton,
    closeModal,
    showEditTask
};