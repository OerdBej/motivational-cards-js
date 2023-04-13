const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
    removeClasses();
    panel.addEventListener('click', () => {
        panel.classList.add('active');
    });
});

//delete active for each elements

function removeClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active');
    });
}
