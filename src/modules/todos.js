let todos = [];

export default function(todosBtn) {
    if (todosBtn.classList.contains('active')) {
        return;
    }
    alert('You are in todos');
};