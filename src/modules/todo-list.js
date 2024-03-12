import deleteIcon from '../assets/icons/delete-icon.svg';
import editIcon from '../assets/icons/edit-icon.svg';

let todos = [
    {
        title: 'Go to beach',
        description: 'Just relax',
        due_date: '03-16-2024',
        priority: 'low',
        done: false
    },
    {
        title: 'Study',
        description: 'for my science exam',
        due_date: '03-22-2024',
        priority: 'high',
        done: false
    },
    {
        title: 'buy a coffee',
        description: '',
        due_date: '03-15-2024',
        priority: 'medium',
        done: false
    }
];

const content = document.querySelector('.content');
const addBtn = document.createElement('button');
addBtn.classList.add('add-btn');
addBtn.textContent = 'Add';

function createTodoItem(id, todo) {
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

    title.textContent = todo.title;
    dueDate.textContent = todo.due_date;
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

function clearContent() {
    content.innerHTML = '';
}

function showAllTodo() {
    clearContent();
    todos.forEach((todo, index) => {
        const todoItem = createTodoItem(
            index,
            todo
        );
        content.appendChild(todoItem);
    });
    content.appendChild(addBtn);
}

function showTodayTodo() {
    clearContent();
    content.textContent = 'Today';
}

function showThisWeekTodo() {
    clearContent();
    content.textContent = 'This Week';
}

export { showAllTodo, showTodayTodo, showThisWeekTodo };