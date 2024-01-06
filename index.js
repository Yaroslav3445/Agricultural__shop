
let btnMenu = document.getElementById('burger');
let line1 = document.querySelector('.header__close1')
let line2 = document.querySelector('.header__close2')
let line3 = document.querySelector('.header__close3')
let menu = document.querySelector('.header__menu');
let item = document.querySelectorAll('.header__item');
let mobileMenu = document.querySelectorAll('.baner__mobile-text')
let menuLi = document.querySelectorAll('.baner__li-mobile')
let baner = document.getElementById('baner-mobile')
let banerProduct = document.querySelector('.baner__product')
let arrowMenu = document.querySelector('.baner__arrow-menu')
let more = document.querySelector('.seeds__more')
let text = document.querySelector('.seeds__main-text')
let btnUp = document.querySelector('.footer__up')
let arrow = document.querySelector('.seeds__arrow')
let buy = document.querySelector('.phone__icon')

buy.addEventListener('click', function (event) {
    menu.classList.toggle('active')

})
btnMenu.addEventListener('click', function (event) {
    menu.classList.toggle('active')
    if (line3.style.transform === '') {
        line1.style.transform = 'rotate(45deg) translate(9px, 6px)'
        line2.style = 'width:0px; overflow: hidden;'
        line3.style.transform = 'rotate(134deg) translate(-8px, 5px)'
        console.log('1')
    } else {
        line1.style.transform = ''
        line2.style = ''
        line3.style.transform = ''
        console.log('2')
    }
})
baner.addEventListener('click', () => {
    let overWidth = window.innerWidth
    if (overWidth <= 660) {
        if (banerProduct.style.height === '280px') {
            banerProduct.style.height = ''
            arrowMenu.style.transform = ''

        } else {
            banerProduct.style.height = '280px'
            arrowMenu.style.transform = 'rotate(180deg)'
        }
    }
})
item.forEach(function (item) {
    item.addEventListener('click', () => {
        menu.classList.remove('active')
    })
})

more.addEventListener('click', () => {
    if (text.style.maxHeight === '1200px') {
        text.style.maxHeight = '624px'
        arrow.style.transform = 'rotate(0deg)'
    } else {
        text.style.maxHeight = '1200px'
        arrow.style.transform = 'rotate(180deg)'
    }
})

btnUp.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
})





