import './styles/style.css';
import './modules/nav-listener';
import { showAllTodo } from './modules/todo-list';
window.onload = () => {
    showAllTodo();
}