import './assets/styles/style.css';
import './modules/components/add-task-modal';
import './modules/components/add-project';
import './modules/components/filter-btn';
import { showAllTask } from './modules/show-task';
import './modules/todo-list';
import './modules/components/submit-task';

window.onload = () => {
    showAllTask();
}