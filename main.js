// used for top nav bar 
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


// used for tab links and such
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }

    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}

function closemenu(){
    sidemenu.style.right = "-200px";
}

