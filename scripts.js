document.addEventListener('DOMContentLoaded', () => {
    const currentLocation = location.pathname; // Get current page path
    const menuItem = document.querySelectorAll('nav ul li a');
    
    menuItem.forEach(item => {
        // Check if the menu item href matches current path
        if (item.getAttribute('href') === currentLocation) {
            item.classList.add('active'); // Add active class to matching item
        }
    });
});
