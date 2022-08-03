
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


const testimonials = () => {

    // Variables
    const controls = [...document.querySelectorAll('.controls > button')];
    const transitionalDiv = document.querySelector('.transitionDiv');
    let clientIndex = 0;
    const clientElements = {
        quote: document.querySelector('blockquote p'),
        name: document.querySelector('.clientName'),
        city: document.querySelector('.clientCity'),
        picture: document.querySelector('.profileBall'),
        forwardButton: document.querySelector('.forward'),
        backButton: document.querySelector('.previous')
    };
    const clientContent = [
        {
            name: 'Jared Locks',
            location: 'Baltimore, MD',
            photo: 'images/client1.jpg',
            quote: "\"At Riorku they have the best team of interior designers, architects, engineers and manufactures to make every dream become a reality.\""
        }, {
            name: 'Savannah Smith',
            location: 'Miami, FL',
            photo: 'images/client2.jpg',
            quote: "\"Riorku's architects, engineers and manufactures helped to design my dream home and made it exactly how I dreamed that it should look!\""
        }, {
            name: 'Dennis Bates',
            location: 'Denver, CO',
            photo: 'images/client3.jpg',
            quote: "\"Wow, I can't believe how good the architects and designers are at Riorku. Now my home exactly matches with my own personal style!\""
        }
    ];
    
    // Functions
    const handleControls = (e) => {
        if (e.target.classList.contains('forward')) forwardPress();
        if (e.target.classList.contains('previous')) backPress();
    }

    const forwardPress = () => {
        clientElements.forwardButton.classList.remove('focusAnimation');
        if (clientIndex === 1) clientElements.forwardButton.disabled = true;
        if (clientElements.backButton.disabled === true) clientElements.backButton.disabled = false;
        if (clientIndex < 2) {
            clientIndex++;
            updateResults();
        } 
    }

    const backPress = () => {
        if (clientElements.forwardButton.disabled === true) clientElements.forwardButton.disabled = false;
        if (clientIndex === 1) clientElements.backButton.disabled = true;
        if (clientIndex > 0) {
            clientIndex--;
            updateResults();
        } 
    }

    const updateResults = () => {            
        showAnimation();
        clientElements.quote.textContent = clientContent[clientIndex].quote;
        clientElements.picture.style.backgroundImage = `url(${clientContent[clientIndex].photo})`;
        clientElements.name.textContent = clientContent[clientIndex].name;
        clientElements.city.textContent = clientContent[clientIndex].location;
    }

    const showAnimation = () => {
        transitionalDiv.classList.add('divAnimation');
        transitionalDiv.onanimationend = () => {
            transitionalDiv.classList.remove('divAnimation');
        }
    }

    // Events
    controls.forEach(control => control.addEventListener('click', handleControls));

}


const riorku = () => {
    mobileMenu();
    typeWriter();
    testimonials();
}

riorku();