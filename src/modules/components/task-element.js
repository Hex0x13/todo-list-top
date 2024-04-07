import editIcon from '../../assets/icons/edit-icon.svg';
import deleteIcon from '../../assets/icons/delete-icon.svg';

function createTaskElement(task) {
    const container = document.createElement('div');
    const checkBtn = document.createElement('input');
    const title = document.createElement('label');
    const dueDate = document.createElement('span');
    const editBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');

    container.classList.add('task');
    container.id = task.id;
    checkBtn.type = 'checkbox';
    checkBtn.id = `item-${task.id}`;
    title.classList.add('title');

    title.textContent = task.title;
    dueDate.textContent = task.due_date.toLocaleDateString();
    dueDate.classList.add('due-date');
    editBtn.classList.add('edit-btn');
    editBtn.innerHTML = editIcon;
    deleteBtn.classList.add('delete-btn')
    deleteBtn.innerHTML = deleteIcon;

    container.appendChild(checkBtn);
    container.appendChild(title);
    container.appendChild(dueDate);
    container.appendChild(editBtn);
    container.appendChild(deleteBtn);

    return container;
}

function destoryTaskElement(taskElement) {
    taskElement.remove();
}

export {
    createTaskElement,
    destoryTaskElement
};