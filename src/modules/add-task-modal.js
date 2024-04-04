import './../assets/styles/add-task-modal.css';

const modal = document.getElementById('add-task-modal');
const closeSpan = document.querySelector('.close');
const modalInputs = Array.from(modal.querySelectorAll('input,select'));
const navListProject = document.querySelector('.nav-list-projects');

function loadProjectOpts() {
    const taskProject = document.querySelector('#task-project');
    taskProject.innerHTML = '';

    navListProject.querySelectorAll('.project-name').forEach((element) => {
        const opt = document.createElement('option');
        if (element.textContent.toLowerCase() === 'ungroup') {
            opt.setAttribute('value', 'none')
            opt.textContent = 'none';
        } else {
            opt.setAttribute('value', element.textContent);
            opt.textContent = element.textContent;
        }
        taskProject.appendChild(opt);
    });
}

closeSpan.onclick = () => {
    modal.style.display = 'none';
}

window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

export default function createAddTaskBtn() {
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

document.addEventListener('keydown', (event) => {
    if (event.key === 'Tab' && modal.style.display === 'block') {
        if (document.activeElement === modalInputs[modalInputs.length - 1]) {
            document.querySelector('.add-btn').focus();
        } else if (!modalInputs.includes(document.activeElement)){
            event.preventDefault();
        }
    }
});
