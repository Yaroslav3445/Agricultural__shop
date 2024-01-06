
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
            <svg class="buy__shopIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
            viewBox="0 0 16 16" fill="#8C3213">
            <g clip-path="url(#clip0_25_1195)">
                <path
                    d="M15.9331 9.76737L13.2374 5.27428L15.6566 4.60228C15.9061 4.533 16.0521 4.27462 15.9828 4.02518C15.9135 3.77575 15.6551 3.62968 15.4057 3.699L12.3985 4.53431C12.3983 4.53437 12.3981 4.53443 12.3978 4.5345L8.46877 5.62587V0.468903C8.46877 0.210028 8.25889 0.000152588 8.00002 0.000152588C7.74114 0.000152588 7.53127 0.210028 7.53127 0.468903V5.88628L3.36118 7.04459C3.36096 7.04465 3.36074 7.04472 3.36052 7.04475L0.343425 7.88281C0.0939564 7.95209 -0.0520436 8.21047 0.0172064 8.4599C0.0748627 8.66737 0.263269 8.80331 0.468581 8.80331C0.510113 8.80331 0.552363 8.79775 0.5943 8.78609L2.47511 8.26365L0.0669876 12.2777C0.0233001 12.3505 0.000175152 12.4339 0.000175152 12.5188C0.000175152 14.4383 1.56183 15.9999 3.48133 15.9999C5.40089 15.9999 6.96252 14.4383 6.96252 12.5188C6.96252 12.4339 6.93943 12.3505 6.89571 12.2777L4.20002 7.78456L11.5124 5.7534L9.1043 9.76737C9.06061 9.84022 9.03749 9.92359 9.03749 10.0085C9.03749 11.928 10.5991 13.4896 12.5186 13.4896C13.4485 13.4896 14.3227 13.1275 14.9802 12.47C15.6378 11.8125 15.9999 10.9383 15.9998 10.0085C15.9999 9.92356 15.9768 9.84019 15.9331 9.76737ZM3.48133 15.0624C2.23892 15.0624 1.20218 14.1669 0.981456 12.9876H5.98121C5.76052 14.1669 4.72377 15.0624 3.48133 15.0624ZM5.66596 12.0501H1.29677L3.48133 8.40881L5.66596 12.0501ZM12.5186 5.89853L14.7033 9.53975H10.3341L12.5186 5.89853ZM12.5187 12.5522C11.2763 12.5522 10.2395 11.6566 10.0188 10.4773H15.0186C14.7979 11.6566 13.7611 12.5522 12.5187 12.5522Z"
                    fill="#8C3213" />
            </g>
            <defs>
                <clipPath id="clip0_25_1195">
                    <rect width="16" height="16" fill="white" />
                </clipPath>
            </defs>
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
            <button  class="swiper-slide__button ${activeClass} " onclick="productsset.hendleSetLocationStorage(this, '${id}')"><svg class="buy__shopIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <g clip-path="url(#clip0_25_1206)">
                <path d="M15.9077 3.34286C15.8161 3.21159 15.6687 3.13046 15.5086 3.12362L5.58366 2.69581C5.29889 2.68335 5.06093 2.9032 5.04875 3.18664C5.03665 3.46997 5.25614 3.70937 5.53955 3.72154L14.7926 4.12042L12.9732 9.79688H4.87696L3.41425 1.83253C3.38209 1.65797 3.26225 1.51235 3.09697 1.44751L0.701302 0.506346C0.437269 0.402975 0.139327 0.532664 0.0356332 0.796375C-0.0678819 1.06023 0.0617715 1.35835 0.325661 1.46204L2.45579 2.29886L3.94432 10.403C3.98918 10.6466 4.20151 10.8236 4.44933 10.8236H4.69624L4.13241 12.3897C4.08522 12.5209 4.10466 12.6666 4.18497 12.7806C4.26518 12.8946 4.39562 12.9624 4.53487 12.9624H4.93034C4.68529 13.2351 4.53487 13.5942 4.53487 13.9891C4.53487 14.8384 5.22589 15.5292 6.07495 15.5292C6.92402 15.5292 7.61504 14.8384 7.61504 13.9891C7.61504 13.5943 7.46462 13.2351 7.2196 12.9624H10.5774C10.3322 13.2351 10.1818 13.5942 10.1818 13.9891C10.1818 14.8384 10.8727 15.5292 11.7219 15.5292C12.5712 15.5292 13.262 14.8384 13.262 13.9891C13.262 13.5943 13.1116 13.2351 12.8666 12.9624H13.3476C13.5839 12.9624 13.7754 12.7709 13.7754 12.5346C13.7754 12.2983 13.5839 12.1068 13.3476 12.1068H5.14357L5.60554 10.8234H13.3475C13.5708 10.8234 13.7683 10.6792 13.8363 10.4668L15.9753 3.79305C16.0245 3.64073 15.9993 3.47419 15.9077 3.34286ZM6.07499 14.6738C5.69749 14.6738 5.39049 14.3668 5.39049 13.9893C5.39049 13.6118 5.69749 13.3048 6.07499 13.3048C6.45249 13.3048 6.75945 13.6118 6.75945 13.9893C6.75945 14.3668 6.45249 14.6738 6.07499 14.6738ZM11.7219 14.6738C11.3444 14.6738 11.0374 14.3668 11.0374 13.9893C11.0374 13.6118 11.3444 13.3048 11.7219 13.3048C12.0994 13.3048 12.4064 13.6118 12.4064 13.9893C12.4064 14.3668 12.0994 14.6738 11.7219 14.6738Z" fill="#8C3213"></path>
            </g>
            <defs>
                <clipPath id="clip0_25_1206">
                    <rect width="16" height="16" fill="white"></rect>
                </clipPath>
            </defs>
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
        const  productStore = localStorageUntil.getProducts()
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
            <svg class="buy__shopIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
            viewBox="0 0 16 16" fill="#8C3213">
            <g clip-path="url(#clip0_25_1195)">
                <path
                    d="M15.9331 9.76737L13.2374 5.27428L15.6566 4.60228C15.9061 4.533 16.0521 4.27462 15.9828 4.02518C15.9135 3.77575 15.6551 3.62968 15.4057 3.699L12.3985 4.53431C12.3983 4.53437 12.3981 4.53443 12.3978 4.5345L8.46877 5.62587V0.468903C8.46877 0.210028 8.25889 0.000152588 8.00002 0.000152588C7.74114 0.000152588 7.53127 0.210028 7.53127 0.468903V5.88628L3.36118 7.04459C3.36096 7.04465 3.36074 7.04472 3.36052 7.04475L0.343425 7.88281C0.0939564 7.95209 -0.0520436 8.21047 0.0172064 8.4599C0.0748627 8.66737 0.263269 8.80331 0.468581 8.80331C0.510113 8.80331 0.552363 8.79775 0.5943 8.78609L2.47511 8.26365L0.0669876 12.2777C0.0233001 12.3505 0.000175152 12.4339 0.000175152 12.5188C0.000175152 14.4383 1.56183 15.9999 3.48133 15.9999C5.40089 15.9999 6.96252 14.4383 6.96252 12.5188C6.96252 12.4339 6.93943 12.3505 6.89571 12.2777L4.20002 7.78456L11.5124 5.7534L9.1043 9.76737C9.06061 9.84022 9.03749 9.92359 9.03749 10.0085C9.03749 11.928 10.5991 13.4896 12.5186 13.4896C13.4485 13.4896 14.3227 13.1275 14.9802 12.47C15.6378 11.8125 15.9999 10.9383 15.9998 10.0085C15.9999 9.92356 15.9768 9.84019 15.9331 9.76737ZM3.48133 15.0624C2.23892 15.0624 1.20218 14.1669 0.981456 12.9876H5.98121C5.76052 14.1669 4.72377 15.0624 3.48133 15.0624ZM5.66596 12.0501H1.29677L3.48133 8.40881L5.66596 12.0501ZM12.5186 5.89853L14.7033 9.53975H10.3341L12.5186 5.89853ZM12.5187 12.5522C11.2763 12.5522 10.2395 11.6566 10.0188 10.4773H15.0186C14.7979 11.6566 13.7611 12.5522 12.5187 12.5522Z"
                    fill="#8C3213" />
            </g>
            <defs>
                <clipPath id="clip0_25_1195">
                    <rect width="16" height="16" fill="white" />
                </clipPath>
            </defs>
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
            <button  class="swiper-slide__button ${activeClass}"  onclick="productsset.hendleSetLocationStorage(this, '${id}')"><svg class="buy__shopIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <g clip-path="url(#clip0_25_1206)">
                <path d="M15.9077 3.34286C15.8161 3.21159 15.6687 3.13046 15.5086 3.12362L5.58366 2.69581C5.29889 2.68335 5.06093 2.9032 5.04875 3.18664C5.03665 3.46997 5.25614 3.70937 5.53955 3.72154L14.7926 4.12042L12.9732 9.79688H4.87696L3.41425 1.83253C3.38209 1.65797 3.26225 1.51235 3.09697 1.44751L0.701302 0.506346C0.437269 0.402975 0.139327 0.532664 0.0356332 0.796375C-0.0678819 1.06023 0.0617715 1.35835 0.325661 1.46204L2.45579 2.29886L3.94432 10.403C3.98918 10.6466 4.20151 10.8236 4.44933 10.8236H4.69624L4.13241 12.3897C4.08522 12.5209 4.10466 12.6666 4.18497 12.7806C4.26518 12.8946 4.39562 12.9624 4.53487 12.9624H4.93034C4.68529 13.2351 4.53487 13.5942 4.53487 13.9891C4.53487 14.8384 5.22589 15.5292 6.07495 15.5292C6.92402 15.5292 7.61504 14.8384 7.61504 13.9891C7.61504 13.5943 7.46462 13.2351 7.2196 12.9624H10.5774C10.3322 13.2351 10.1818 13.5942 10.1818 13.9891C10.1818 14.8384 10.8727 15.5292 11.7219 15.5292C12.5712 15.5292 13.262 14.8384 13.262 13.9891C13.262 13.5943 13.1116 13.2351 12.8666 12.9624H13.3476C13.5839 12.9624 13.7754 12.7709 13.7754 12.5346C13.7754 12.2983 13.5839 12.1068 13.3476 12.1068H5.14357L5.60554 10.8234H13.3475C13.5708 10.8234 13.7683 10.6792 13.8363 10.4668L15.9753 3.79305C16.0245 3.64073 15.9993 3.47419 15.9077 3.34286ZM6.07499 14.6738C5.69749 14.6738 5.39049 14.3668 5.39049 13.9893C5.39049 13.6118 5.69749 13.3048 6.07499 13.3048C6.45249 13.3048 6.75945 13.6118 6.75945 13.9893C6.75945 14.3668 6.45249 14.6738 6.07499 14.6738ZM11.7219 14.6738C11.3444 14.6738 11.0374 14.3668 11.0374 13.9893C11.0374 13.6118 11.3444 13.3048 11.7219 13.3048C12.0994 13.3048 12.4064 13.6118 12.4064 13.9893C12.4064 14.3668 12.0994 14.6738 11.7219 14.6738Z" fill="#8C3213"></path>
            </g>
            <defs>
                <clipPath id="clip0_25_1206">
                    <rect width="16" height="16" fill="white"></rect>
                </clipPath>
            </defs>
        </svg></button>
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
