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

export {
    toggleActiveNav,
    autoIncrement
};