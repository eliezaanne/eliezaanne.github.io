let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section'); // Use querySelectorAll to select all sections
let navlinks = document.querySelectorAll('header nav a'); // Use querySelectorAll to select all nav links

window.onscroll = () => {
    sections.forEach(sec => { // Correct method name from array.forEach to forEach
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                // Fix the query selector and attribute selector syntax
                if (links.getAttribute('href').includes(id)) {
                    links.classList.add('active');
                }
            });
        }
    });
};

document.addEventListener("DOMContentLoaded", function() {
    const collegeContent = document.getElementById('college-content');
    const collegeImage = document.getElementById('college-image');

    // Initialize the display property
    collegeImage.style.display = 'none';

    collegeContent.addEventListener('click', function() {
        // Toggle the display property between 'none' and 'block'
        if (collegeImage.style.display === 'none') {
            collegeImage.style.display = 'block';
        } else {
            collegeImage.style.display = 'none';
        }
    });
});


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Function to open the popup
function openPopup() {
    document.getElementById('popup').style.display = 'flex';
}

// Function to close the popup
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}
