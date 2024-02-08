
const ROOT__PRODUCTS = document.querySelector('.swiper-wrapper')
const ROOT__PRODUCTSHARES = document.querySelector('.shares__wrapper')
class Products {
    constructor() {
        this.classNameActive = 'swiper-slide__button__active'
    }
    hendleSetLocationStorage(element, id) {
        const { pushProduct, products } = localStorageUntil.putProducts(id)
        if (pushProduct) {
            element.classList.add(this.classNameActive)
        } else {
            element.classList.remove(this.classNameActive)
        }
        castlePage.render(products.length)
    }
    render() {
        const productStore = localStorageUntil.getProducts()
        let htmlcatalog = '';
        CATALOG.forEach(({ id, img, name, prise, quantity }) => {
            let activeClass = '';
            if (productStore.indexOf(id) === -1) {
                activeClass = ''
            } else {
                activeClass = ' ' + this.classNameActive
            }
            htmlcatalog += `
            <div class="slider__slide swiper-slide">
            <ul class="swiper-slide__ul">
            <li class="swiper-slide__li">
            <div class="swiper-slide__image">
            <button class="swiper-slide__icon">
            <svg class="buy__shopIcon" width="16" height="16">
            <use xlink:href="sprite.svg#sol" />
    </svg>
            </button>
            <img src="${img}" />
            </div>
            <div  class="swiper-slide__block">
            <span  class="swiper-slide__name">${name}</span>
            <div class="swiper-slide__link">
            <div class="swiper-slide__column">
            <span  class="swiper-slide__prise">${prise}</span>
            <span  class="swiper-slide__quantity">${quantity}</span>
            </div>
            <button  class="swiper-slide__button ${activeClass} " onclick="productsset.hendleSetLocationStorage(this, '${id}')"><svg class="buy__shopIcon" width="16" height="15">
            <use xlink:href="sprite.svg#castle" />
        </svg></button>
        </div>
            </div>
            </li>
            </ul>
            </div>
            `
        });

        const html = ` 
            ${htmlcatalog}
        `;

        ROOT__PRODUCTS.innerHTML = html;
    }

};


class Shares {
    constructor() {
        this.classNameActive = 'swiper-slide__button__active'
    }
    SharesHendleSetLocationStorage(element, id) {
        const { pushProduct, products } = localStorageUntil.putProducts(id)
        if (pushProduct) {
            element.classList.add(this.classNameActive)
        } else {
            element.classList.remove(this.classNameActive)
        }
        castlePage.render(products.length)
    }
    render() {
        const productStore = localStorageUntil.getProducts()
        let htmlcatalogShares = '';
        CATALOGSHARES.forEach(({ id, img, name, prise, quantity }) => {
            let activeClass = '';
            if (productStore.indexOf(id) === -1) {
                activeClass = ''
            } else {
                activeClass = ' ' + this.classNameActive
            }
            htmlcatalogShares += `
            <div class="swiper-slide">
            <ul class="swiper-slide__ul">
            <li class="swiper-slide__li">
            <div class="swiper-slide__image">
            <button class="swiper-slide__icon">
            <svg class="buy__shopIcon" width="16" height="16">
                      <use xlink:href="sprite.svg#sol" />
              </svg>
            </button>
            <img src="${img}" />
            </div>
            <div  class="swiper-slide__block">
            <span  class="swiper-slide__name">${name}</span>
            <div class="swiper-slide__link">
            <div class="swiper-slide__column">
            <span  class="swiper-slide__prise">${prise}</span>
            <span  class="swiper-slide__quantity">${quantity}</span>
            </div>
            <button  class="swiper-slide__button ${activeClass}"  onclick="productsset.hendleSetLocationStorage(this, '${id}')">
            <svg class="buy__shopIcon" width="16" height="15">
            <use xlink:href="sprite.svg#castle" />
        </svg>
            </button>
        </div>
            </div>
            </li>
            </ul>
            </div>`
        });

        let shtml = `
            ${htmlcatalogShares}
        `;

        ROOT__PRODUCTSHARES.innerHTML = shtml;
    }
}

const swiper = new Swiper(".slider__body", {
    speed: 1000,
    spaceBetween: 30,
    navigation: {
        prevEl: ".slider__prev",
        nextEl: ".slider__next",
    },
    breakpoints: {
        500: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
        870: {
            slidesPerView: 2,
            slidesPerGroup: 2,

        },
        1450: {
            slidesPerView: 4,
            slidesPerGroup: 4,
        },
    },
    pagination: {
        el: '.slider__index',
        clickable: true,
    },
});

const slider2 = new Swiper(".shares__swiper", {
    speed: 1000,
    spaceBetween: 30,
    navigation: {
        prevEl: ".shares__prev",
        nextEl: ".shares__next",
    },
    breakpoints: {
        500: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
        870: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        1450: {
            slidesPerView: 4,
            slidesPerGroup: 4,
        },
    },
    pagination: {
        el: '.shares__index',
        clickable: true,
    },
});

const slider3 = new Swiper(".partner__swiper", {
    speed: 1000,
    navigation: {
        prevEl: ".partner__prev",
        nextEl: ".partner__next",
    },
    loop: false,
    breakpoints: {
        0: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 20,
        },
        870: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 30,
        },
        1450: {
            slidesPerView: 4,
            slidesPerGroup: 4,
        },
    },
    pagination: {
        el: '.partner__pagination',
        clickable: true,
    },

});



const productsset = new Products();
productsset.render()

const productShares = new Shares();
productShares.render()
