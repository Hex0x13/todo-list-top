import projectContainer from "./projects-container";

const addProjectBtn = document.querySelector('.add-project-btn');
const addProjectInput = document.querySelector('.add-project-input');
const addBtn = addProjectInput.querySelector('.add-button');
const cancelBtn = addProjectInput.querySelector('.cancel-button');
const inputName = addProjectInput.querySelector('input');

addProjectBtn.addEventListener('click', addProject);
addBtn.addEventListener('click', confirmProject);
cancelBtn.addEventListener('click', cancelProject);

function addProject() {
    addProjectBtn.classList.add('hide-element');
    addProjectInput.classList.remove('hide-element');
}
function confirmProject() {
    if (inputName.value == '') {
        return;
    }
    projectContainer.addProject(inputName.value);
    inputName.value = '';
    addProjectBtn.classList.remove('hide-element');
    addProjectInput.classList.add('hide-element');
}

function cancelProject() {
    addProjectBtn.classList.remove('hide-element');
    addProjectInput.classList.add('hide-element');
}
