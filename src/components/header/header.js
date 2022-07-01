import { overlayToggle } from '../overlay/overlay'

const hamburger = document.querySelector('.hamburger--js');
const mobilMenu = document.querySelector('.header__bottom-js');
const body = document.querySelector('body');

hamburger.addEventListener('click', () => {
    menuToggle();
})

const menuToggle = () => {
    body.classList.toggle('active');
    overlayToggle();
}

$('.scrollto a').on('click', function() {
    if(body.classList.contains('active')) {
        menuToggle();
    }
    let href = $(this).attr('href');
    
    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, {
        duration: 370,   // по умолчанию «400» 
        easing: "linear" // по умолчанию «swing» 
    });

    return false;
});