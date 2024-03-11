import renderTodos from './todos';
import renderNotes from './notes';
import renderProjects from './projects';

const todosBtn = document.querySelector('.todos');
const notesBtn = document.querySelector('.notes');
const projectsBtn = document.querySelector('.projects');

todosBtn.addEventListener('click', showTodos);
notesBtn.addEventListener('click', showNotes);
projectsBtn.addEventListener('click', showProjects)

function toggleActive(elem) {
    if (!elem.classList.contains('active')) {
        todosBtn.classList.remove('active');
        notesBtn.classList.remove('active');
        projectsBtn.classList.remove('active');
        elem.classList.add('active');
    }
}

function showTodos() {
    renderTodos(todosBtn);
    toggleActive(todosBtn);
}

function showNotes() {
    renderNotes(notesBtn);
    toggleActive(notesBtn);
}

function showProjects() {
    renderProjects(projectsBtn);
    toggleActive(projectsBtn);
}