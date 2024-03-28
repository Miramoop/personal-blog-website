const hamburgerMenu = document.querySelector('.hamburger-menu');
const sideMenu = document.querySelector('.side-menu');
const sideMenuItems = Array.from(sideMenu.querySelectorAll('a'));

hamburgerMenu.addEventListener('click', () => {
    sideMenu.classList.toggle('active');
});

sideMenuItems.foreach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        sideMenuItems.forEach((item) => {
            item.classList.add('active');
        });
        link.classList.add('active');
    });
});


