let navbar_toggler = document.querySelector('.navbar-toggler');
let full_nav_container = document.querySelector('.full-nav-container');
navbar_toggler.addEventListener('click', function () {
    if (full_nav_container.classList.contains('d-block')) {
        full_nav_container.classList.remove('animate__fadeInDown');
        full_nav_container.classList.add('animate__fadeOutUp');
        setTimeout(() => {
            full_nav_container.classList.remove('d-block');
        }, 500);
    } else {
        full_nav_container.classList.remove('animate__fadeOutUp');
        full_nav_container.classList.add('d-block');
        full_nav_container.classList.add('animate__fadeInDown');
    }
});