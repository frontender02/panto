// Menu
const infoBtns = document.querySelectorAll('.info-dot')
const infoHints = document.querySelectorAll('.info-hint')


for (let btn of infoBtns) {
    btn.addEventListener('click', showHint)
}

for (let hint of infoHints) {
    hint.addEventListener('click', (e) => e.stopPropagation())
}

document.addEventListener('click', closeHints)


function showHint(e){
    e.stopPropagation()
    for (let hint of infoHints) {
        hint.classList.add('none')
    }
    this.parentNode.querySelector('.info-hint').classList.toggle('none')
}

function closeHints(){
    for (let hint of infoHints) {
        hint.classList.add('none')
    }
}


// Mobile Menu
const mobileNav = document.querySelector('.nav-mobile-wrapper')
const mobileNavOpen = document.querySelector('.nav__btn')
const mobileNavClose = document.querySelector('.nav-mobile-btn-close')

mobileNavOpen.onclick = function(){
    mobileNav.classList.add('nav-mobile-wrapper--open')
}
mobileNavClose.onclick = function(){
    mobileNav.classList.remove('nav-mobile-wrapper--open')
}


// Slider
const swiper = new Swiper('.swiper', {
    loop: true,
    freeMode: true,
    slidesPerView: 1,
    spaceBetween: 10,

    breakpoints: {
        600: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        920: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1230: {
            slidesPerView: 4,
            spaceBetween: 42,
        },
    },

    navigation: {
      nextEl: '#sliderNext',
      prevEl: '#sliderPrev',
    },
});


// Tabs
const tabsBtns = document.querySelectorAll('[data-tab]')
const tabsProducts = document.querySelectorAll('[data-tab-value]')

for (const btn of tabsBtns) {
    btn.addEventListener('click', function(){
        for (const btn of tabsBtns){
            btn.classList.remove('tab-controls__btn--active')
        }
        this.classList.add('tab-controls__btn--active')

        for (const product of tabsProducts) {
            if(this.dataset.tab === 'all'){
                product.classList.remove('none')
            } else {
                if(product.dataset.tabValue === this.dataset.tab){
                    product.classList.remove('none')
                } else {
                    product.classList.add('none')
                }
            }
        }

        swiper.update();
    })
}