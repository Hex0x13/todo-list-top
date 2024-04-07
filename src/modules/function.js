

function toggleActive(elem, callback, ...arg) {
    if (!elem.classList.contains('active')) {
        const activeNav = document.querySelector('.active');
        activeNav.classList.remove('active');

        if (callback) {
            callback(...arg);
        }
        elem.classList.add('active');
    }
}

function toDate(date_str) {
    const [year, month, day] = date_str.split('-');
    return new Date(year, month-1, day);
}

export { toggleActive, toDate };