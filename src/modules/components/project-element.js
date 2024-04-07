import deleteIcon from '../../assets/icons/delete-icon.svg';

let active;

function createProjectElement(project) {
    const projectContainer = document.createElement('div');
    const projectName = document.createElement('button');
    const deleteButton = document.createElement('button');

    projectContainer.className = 'project-container';
    projectName.className = 'project-name';
    deleteButton.className = 'delete-project-btn';

    projectName.textContent = project.name;
    deleteButton.innerHTML = deleteIcon;

    if (projectName.textContent === active) {
        projectName.classList.add('active');
    }

    projectContainer.appendChild(projectName);
    projectContainer.appendChild(deleteButton);
    return projectContainer;
}

function destroyProjectElement(projectContainer) {
    const projectName = projectContainer.querySelector('.project-name');
    if (projectName && projectName.classList.contains('active')) {
        active = projectName.textContent;
    }
    projectContainer.remove();
}

export {
    createProjectElement,
    destroyProjectElement
};