function toggleActiveNav(element, callback, ...arg) {
    if (element.classList.contains('active')) {
        return;
    }

    const activeNav = document.querySelector('.active');
    activeNav.classList.remove('active');

    if (callback) {
        callback(...arg);
    }
    element.classList.add('active');
}


const autoIncrement = (function () {
    let id = 0;
    return function () {
        return id++;
    };
})();

function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

export {
    toggleActiveNav,
    autoIncrement,
    formatDate
};