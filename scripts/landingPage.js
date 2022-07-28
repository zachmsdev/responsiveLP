
// riorku.js

const mobileMenu = () => {

    // variables
    const burgerIcon = document.querySelector('.burgerIcon');
    const mobileMenu = document.querySelector('.mobileMenu');
    const links = [...document.querySelectorAll('.mobileMenu > *')];
    let menuShowing = false;

    // functions
    const handleMenu = () => {
        burgerIcon.classList.toggle('clicked');
        if (!menuShowing) {
            mobileMenu.classList.add('showMenu');
            menuShowing = true;
            setTimeout(menuLinks, 375);
        } else {
            mobileMenu.classList.remove('showMenu');
            menuShowing = false;
            menuLinks();
        }
    }

    const menuLinks = () => {
        if (menuShowing) {
            for (let z = 0; z < links.length; z++) {
                setTimeout(() => {
                    links[z].style.display = 'inherit';
                }, 75 * z)
            }
        } else {
            links.forEach(link => link.style.display = 'none');
        }
    }

    // events
    burgerIcon.addEventListener('click', handleMenu);

}


const riorku = () => {
    mobileMenu();
}

riorku();