import { toggleActive } from './function';
import { showAllTodo } from './todo-list';
import { showTodayTodo } from './todo-list';
import { showThisWeekTodo } from './todo-list';

const allBtn = document.querySelector('.all');
const todayBtn = document.querySelector('.today');
const weekBtn = document.querySelector('.week');

allBtn.onclick = showAll;
todayBtn.onclick = showToday;
weekBtn.onclick = showWeek;

function showAll() {
    toggleActive(allBtn, showAllTodo);
}

function showToday() {
    toggleActive(todayBtn, showTodayTodo);
}

function showWeek() {
    toggleActive(weekBtn, showThisWeekTodo);
}