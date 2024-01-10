import Splide from '@splidejs/splide';

// Set button to click.
let button = document.querySelector('.navbar__menu_toggler');
let main_card_btns = document.querySelectorAll('.main__card_btn');

// Click the button.
function toggleClass(el, className = "active") {
    if (-1 !== el.className.indexOf(className)) {
        el.className = el.className.replace(` ${className}`, '');
        el.setAttribute('aria-expanded', 'false');
    } else {
        el.className += ` ${className}`;
        el.setAttribute('aria-expanded', 'true');
    }
}

const desktopMediaQuery = window.matchMedia("(min-width: 1024px)");

desktopMediaQuery.addEventListener('change', (event) => {
    if (event.matches) {
        button.className = button.className.replace(' opened', '');
        button.setAttribute('aria-expanded', 'false');
    }
})



button.addEventListener('click', () => toggleClass.call(this, button, "opened"));
main_card_btns.forEach((btn) => btn.addEventListener('click', () => {
    main_card_btns.forEach((otherBtn) => {
        const otherCardWrapper = otherBtn.closest('.main__card_wrapper');
        console.log(otherBtn !== btn)
        if (otherBtn !== btn) {
            otherCardWrapper.classList.remove('active');
            otherBtn.textContent = 'ver más';
        }
    });
    toggleClass.call(this, btn.closest('.main__card_wrapper'));
    btn.textContent = btn.textContent === 'ver más' ? 'cerrar' : 'ver más';
}));


new Splide('.splide', {
    type: 'fade',
    pauseOnHover: true,
    rewind: true,
    autoplay: true,
    interval: 8000,
}).mount();