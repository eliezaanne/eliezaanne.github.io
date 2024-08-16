function showCategory(category) {
    console.log(`Showing category: ${category}`); // Debugging line
    const projects = document.querySelectorAll('.project-item');
    
    projects.forEach(project => {
        if (category === 'all') {
            project.classList.remove('hidden');
        } else if (project.classList.contains(category)) {
            project.classList.remove('hidden');
        } else {
            project.classList.add('hidden');
        }
    });
}

document.querySelectorAll('.category-buttons button').forEach(button => {
    button.addEventListener('click', function() {
        console.log(`Button clicked: ${this.textContent.toLowerCase()}`); // Debugging line
        showCategory(this.textContent.toLowerCase());
    });
});
