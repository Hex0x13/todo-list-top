import './assets/styles/style.css';
import './modules/nav-listener';
import { showAllTask } from './modules/todo-list';

window.onload = () => {
    showAllTask();
}
