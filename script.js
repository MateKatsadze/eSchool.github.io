document.getElementById('burgerMenu').addEventListener('click', function () {
    var mobileMenu = document.getElementById('mobileMenu');
    var menuIcon = document.getElementById('burgerMenu').getElementsByTagName('path')[0]; // Get the path element inside the SVG

    if (mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
        menuIcon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16'); // Set the path data for the burger icon
    } else {
        mobileMenu.classList.add('active');
        menuIcon.setAttribute('d', 'M6 18L18 6M6 6l12 12'); // Set the path data for the close icon
    }
});

// Listen for window resize events
window.addEventListener('resize', function() {
    var windowWidth = window.innerWidth;
    var mobileMenu = document.getElementById('mobileMenu');
    var navLinks = document.querySelector('.nav-links');

    // If window width is greater than or equal to 769 pixels, ensure mobile menu is hidden and remove 'active' class
    if (windowWidth >= 769) {
        mobileMenu.classList.remove('active');
    }

    // If window width is less than 769 pixels, ensure desktop navigation links are hidden
    if (windowWidth < 769) {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
    }
});
