import './assets/styles/style.css';
import './modules/components/task-modal';
import './modules/components/add-project';
import './modules/components/filter-btn';
import { showAllTask } from './modules/show-task';
import './modules/components/submit-task';
import taskLocalStorage from './modules/task-local-storage';
import projectsContainer from './modules/components/projects-container';

window.onload = () => {
    taskLocalStorage.load();
    projectsContainer.renderProjects();
    showAllTask();
}