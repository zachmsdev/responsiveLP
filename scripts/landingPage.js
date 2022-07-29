
// riorku.js

const mobileMenu = () => {

    // Variables
    const burgerIcon = document.querySelector('.burgerIcon');
    const mobileMenu = document.querySelector('.mobileMenu');
    const links = [...document.querySelectorAll('.mobileMenu > *')];
    let menuShowing = false;

    // Functions
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

    // Events
    burgerIcon.addEventListener('click', handleMenu);

}

const typeWriter = () => {

    // Variables
    let COUNTER = 1;
    const arrayUls = [...document.querySelectorAll('aside > ul')];

    // Functions
    const logic = () => {
        // 3 UL's total, can't count too far
        if (COUNTER === 3) COUNTER = 0;
        let ULindex = COUNTER++;
        // display the next UL element
        classChange(ULindex);
        let clientNames = [...arrayUls[ULindex].children];
        // send each individual client to helper function 
        clientNames.forEach(client => TYPE(client));
    }

    // run loop through client to display text
    const TYPE = (client) => {
        const CLIENTtext = client.textContent;
        client.textContent = '';
        for (let z = 0; z < CLIENTtext.length; z++) {
            setTimeout(() => {
                client.textContent += CLIENTtext[z];
            }, 60 * z);
        }
    }

    const classChange = (ULindex) => {
        arrayUls.forEach(UL => UL.classList.remove('helloClients'));
        arrayUls[ULindex].classList.add('helloClients');
    }

    // Interval
    setInterval(logic, 6000);
    
}



const riorku = () => {
    mobileMenu();
    typeWriter();
}

riorku();