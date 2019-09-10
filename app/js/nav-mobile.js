function showMenu() {

    const toggleMenu = document.getElementById('toggle-icon');
    const navList = document.getElementById('nav-list');

    function openMenu() {
        toggleMenu.classList.toggle("fa-bars");
        toggleMenu.classList.toggle("fa-times");
        navList.classList.toggle("nav__list--mobile-open");
        navList.classList.toggle("nav__list--mobile-close");
    }

    toggleMenu.addEventListener("click", openMenu);

    $(window).resize(function () {

        let width = $(window).width();

        if (width > 575) {
            toggleMenu.classList.add("fa-bars");
            toggleMenu.classList.remove("fa-times");
            navList.classList.remove("nav__list--mobile-open");
            navList.classList.add("nav__list--mobile-close");
        }
    });
    
} showMenu();