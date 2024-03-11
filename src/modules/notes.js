let notes = [];

export default function(notesBtn) {
    if (notesBtn.classList.contains('active')) {
        return;
    }
    alert('You are in Notes');
};