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
    const detailsBtn = document.createElement('button');
    const dueDate = document.createElement('span');
    const editBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');

    checkBtn.type = 'checkbox';
    todoItem.id = id;
    checkBtn.id = `item-${id}`;
    title.setAttribute('for', checkBtn.id);

    title.textContent = todo.title;
    detailsBtn.textContent = 'details';
    dueDate.textContent = todo.dueDate;
    editBtn.textContent = 'edit';
    deleteBtn.textContent = 'delete';

    todoItem.appendChild(checkBtn);
    todoItem.appendChild(title);
    todoItem.appendChild(detailsBtn);
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