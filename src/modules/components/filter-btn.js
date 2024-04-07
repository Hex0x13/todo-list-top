import { toggleActiveNav } from '../functions';
import { showAllTask, showByTaskProject, showThisWeekTask, showTodayTask } from '../show-task';


const allBtn = document.querySelector('.all');
const todayBtn = document.querySelector('.today');
const weekBtn = document.querySelector('.week');
const ungroup = document.querySelector('.ungroup');

allBtn.addEventListener('click', () => toggleActiveNav(allBtn, showAllTask));
todayBtn.addEventListener('click', () => toggleActiveNav(todayBtn, showTodayTask));
weekBtn.addEventListener('click', () => toggleActiveNav(weekBtn, showThisWeekTask));
ungroup.addEventListener('click', () => toggleActiveNav(ungroup, showByTaskProject, 'ungroup'));