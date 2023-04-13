const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        // If the clicked panel already has the "active" class, remove it
        if (panel.classList.contains('active')) {
            panel.classList.remove('active');
        } else {
            // Otherwise, remove the "active" class from all other panels and add it to the clicked panel
            removeClasses();
            panel.classList.add('active');
        }
    });
});

// Function to remove the "active" class from all panels
function removeClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active');
    });
}
