import './index.css';

document.addEventListener('DOMContentLoaded', function() {
    const cookieConsent = document.querySelector('.cookie-consent');
    const cookieButton = document.querySelector('.cookie-consent__button');

    const buttonClicked = localStorage.getItem('buttonClicked');

    if(buttonClicked === 'true') {
        cookieConsent.style.display = 'none';
    }
    cookieButton.addEventListener('click', () => {
        cookieConsent.style.display = 'none';
        localStorage.setItem('buttonClicked', 'true');
    })
})
