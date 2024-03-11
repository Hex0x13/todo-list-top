let projects = [];

export default function(projectsBtn) {
    if (projectsBtn.classList.contains('active')) {
        return;
    }
    alert('You are in Projects');
};