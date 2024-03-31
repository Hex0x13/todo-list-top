import './assets/styles/style.css';
import './modules/listener';
import { renderProjects, showAllTask } from './modules/todo-list';

window.onload = () => {
    showAllTask();
    renderProjects();
}
