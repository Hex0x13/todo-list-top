const navList = document.querySelector('.nav-list-filter').children;

function toggleActive(elem, callback, ...arg) {
    if (!elem.classList.contains('active')) {
        for (const child of navList) {
           child.classList.remove('active'); 
        };
        if (callback) {
            callback(...arg);
        }
        elem.classList.add('active');
    }
}

export { toggleActive };