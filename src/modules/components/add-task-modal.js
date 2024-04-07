import '../../assets/styles/add-task-modal.css';

const modal = document.getElementById('add-task-modal');
const closeSpan = document.querySelector('.close');
const modalInputs = Array.from(modal.querySelectorAll('input,select'));
const navListProject = document.querySelector('.projects-container');

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
    modal.style.display = 'none';
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

function createAddTaskModal() {
    const addBtn = document.createElement('button');
    addBtn.classList.add('add-btn');
    addBtn.textContent = 'Add';

    addBtn.onclick = () => {
        modal.style.display = 'block';
        modal.querySelector('#title').focus();
        loadProjectOpts();
    }

    return addBtn;
}

export {
    createAddTaskModal,
    closeModal
};