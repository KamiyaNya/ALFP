function burgerMenu() {
    let menu = document.querySelector('.burger-menu');
    let btn2 = document.querySelector('.burger-menu__button2');
    menu.classList.add('burger-menu__active');
    btn2.style.display = 'block';
}

function overlayMenu() {
    let menu = document.querySelector('.burger-menu');
    menu.classList.remove('burger-menu__active');
}

function burgerMenu2() {
    let menu = document.querySelector('.burger-menu');
    let btn = document.querySelector('.burger-menu__button1');
    let btn2 = document.querySelector('.burger-menu__button2');
    menu.classList.remove('burger-menu__active');
    btn.style.display = 'block';
    btn2.style.display = 'none';
}