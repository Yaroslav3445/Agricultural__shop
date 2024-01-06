// const modalContent = document.querySelector('.shopping');
// const closeModalButton = document.querySelector('#close-modal');
const exit = document.querySelector('.modal-exit')
const ROOT__SHOPPING = document.getElementById("shopping")
class Shopping {
    handleClear() {
        ROOT__SHOPPING.innerHTML = ''
    }
    render() {
        const productStore = localStorageUntil.getProducts()
        let htmlcatalog = '';
        CATALOG.forEach(({ id, img, name, prise, quantity }) => {
            if (productStore.indexOf(id) !== -1) {
                htmlcatalog += `
                <div class="shopping__list">
                    <div class="shopping__box">
                        <div class="shopping__block">
                            <div class="shopping__info">
                                <h3 class="shopping__name">${name}</h3>
                                <div class="shopping__wrap">
                                    <div class="shopping__commodity">
                                        <img src=${img} alt="">
                                    </div>
                                    <div class="shopping__characteristics">
                                        <div class="shopping__prise">${prise}</div>
                                        <span class="shopping__volume">Ціна за 5 л</span>
                                        <div class="shopping__company">
                                            <span>Виробник</span>
                                            <div class="shopping__row"><img src="image/37.svg" alt=""><span
                                                    class="shopping__post">ФМС
                                              Украина</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="shopping__quantity-wrap">
                                <div class="shopping__quantity"><span class="shopping__calculator">Кількість</span><span
                                        class="shopping__minus shopping__lor"></span>
                                    <span class="shopping__number">${quantity}</span><span class="shopping__plus shopping__lor"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            
            `
            }
        });
        CATALOGSHARES.forEach(({ id, img, name, prise, quantity }) => {
            if (productStore.indexOf(id) !== -1) {
                htmlcatalog += `
                <div class="shopping__list">
                    <div class="shopping__box">
                        <div class="shopping__block">
                            <div class="shopping__info">
                                <h3 class="shopping__name">${name}</h3>
                                <div class="shopping__wrap">
                                    <div class="shopping__commodity">
                                        <img src=${img} alt="">
                                    </div>
                                    <div class="shopping__characteristics">
                                        <div class="shopping__prise">${prise}</div>
                                        <span class="shopping__volume">Ціна за 5 л</span>
                                        <div class="shopping__company">
                                            <span>Виробник</span>
                                            <div class="shopping__row"><img src="image/37.svg" alt=""><span
                                                    class="shopping__post">ФМС
                                              Украина</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="shopping__quantity-wrap">
                                <div class="shopping__quantity"><span class="shopping__calculator">Кількість</span><span
                                        class="shopping__minus shopping__lor"></span>
                                    <span class="shopping__number">${quantity}</span><span class="shopping__plus shopping__lor"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `
            }
        });
        const html = `
       <div class="modal">
       <div class="modal__wrap">
       <div class="modal__exit"> <img src="image/exit.svg" alt="фото"  onclick="shoppingPage.handleClear()"></div>
          <div class="shopping">
                 <h1 class="shopping__castle"><img src="image/16.svg" alt="">Кошик<img class="shopping__image"
                          src="image/16.svg" alt=""></h1>
                           ${htmlcatalog}
                     <div class="shopping__order">
                        <button class="shopping__button shopping__next" onclick="shoppingPage.handleClear()"><svg xmlns="http://www.w3.org/2000/svg" width="16"
                                height="17" viewBox="0 0 16 17" fill="none">
                                <path
                                    d="M15.9077 4.34289C15.8161 4.21162 15.6687 4.13049 15.5086 4.12365L5.58366 3.69584C5.29889 3.68338 5.06093 3.90323 5.04875 4.18667C5.03665 4.47 5.25614 4.7094 5.53955 4.72157L14.7926 5.12045L12.9732 10.7969H4.87696L3.41425 2.83256C3.38209 2.658 3.26225 2.51238 3.09697 2.44754L0.701302 1.50638C0.437269 1.40301 0.139327 1.53269 0.0356332 1.79641C-0.0678819 2.06026 0.0617715 2.35838 0.325661 2.46207L2.45579 3.29889L3.94432 11.403C3.98918 11.6467 4.20151 11.8236 4.44933 11.8236H4.69624L4.13241 13.3898C4.08522 13.521 4.10466 13.6667 4.18497 13.7806C4.26518 13.8946 4.39562 13.9624 4.53487 13.9624H4.93034C4.68529 14.2352 4.53487 14.5943 4.53487 14.9892C4.53487 15.8384 5.22589 16.5293 6.07495 16.5293C6.92402 16.5293 7.61504 15.8384 7.61504 14.9892C7.61504 14.5943 7.46462 14.2352 7.2196 13.9624H10.5774C10.3322 14.2352 10.1818 14.5943 10.1818 14.9892C10.1818 15.8384 10.8727 16.5293 11.7219 16.5293C12.5712 16.5293 13.262 15.8384 13.262 14.9892C13.262 14.5943 13.1116 14.2352 12.8666 13.9624H13.3476C13.5839 13.9624 13.7754 13.7709 13.7754 13.5347C13.7754 13.2984 13.5839 13.1069 13.3476 13.1069H5.14357L5.60554 11.8235H13.3475C13.5708 11.8235 13.7683 11.6792 13.8363 11.4668L15.9753 4.79308C16.0245 4.64076 15.9993 4.47423 15.9077 4.34289ZM6.07499 15.6738C5.69749 15.6738 5.39049 15.3669 5.39049 14.9894C5.39049 14.6119 5.69749 14.3049 6.07499 14.3049C6.45249 14.3049 6.75945 14.6119 6.75945 14.9894C6.75945 15.3669 6.45249 15.6738 6.07499 15.6738ZM11.7219 15.6738C11.3444 15.6738 11.0374 15.3669 11.0374 14.9894C11.0374 14.6119 11.3444 14.3049 11.7219 14.3049C12.0994 14.3049 12.4064 14.6119 12.4064 14.9894C12.4064 15.3669 12.0994 15.6738 11.7219 15.6738Z"
                                    fill="#E74E13" />
                            </svg>Продовжити покупки</button>
                        <button class="shopping__button shopping__buy"><svg xmlns="http://www.w3.org/2000/svg" width="20"
                                height="20" viewBox="0 0 20 20" fill="none">
                                <path
                                    d="M15.8558 2.62037H14.0465V1.81092C14.0465 1.54903 13.7608 1.43001 13.4989 1.43001H12.0943C11.761 0.477697 10.9277 0.00154151 9.97537 0.00154151C9.03354 -0.0338659 8.17688 0.543636 7.85648 1.43001H6.47564C6.21375 1.43001 5.95186 1.54903 5.95186 1.81092V2.62037H4.14244C3.07019 2.63181 2.19298 3.47767 2.14258 4.54878V18.1906C2.14258 19.2381 3.09489 20 4.14244 20H15.8558C16.9034 20 17.8557 19.2381 17.8557 18.1906V4.54883C17.8053 3.47767 16.9281 2.63181 15.8558 2.62037ZM6.90413 2.38232H8.21357C8.44214 2.35443 8.62574 2.18054 8.66593 1.95378C8.80692 1.33978 9.3456 0.899032 9.97537 0.882445C10.5993 0.901356 11.1299 1.34347 11.261 1.95378C11.3037 2.18837 11.4994 2.3645 11.7371 2.38232H13.0942V4.28694H6.90413V2.38232ZM16.9034 18.1906C16.9034 18.7144 16.3796 19.0477 15.8558 19.0477H4.14244C3.61866 19.0477 3.09489 18.7144 3.09489 18.1906V4.54883C3.14347 4.00363 3.59515 3.58271 4.14244 3.57273H5.95182V4.78693C5.97697 5.05369 6.20801 5.25324 6.47559 5.23929H13.4988C13.7713 5.25419 14.0096 5.05738 14.0464 4.78693V3.57268H15.8558C16.403 3.58271 16.8548 4.00359 16.9033 4.54878V18.1906H16.9034Z"
                                    fill="white" />
                                <path
                                    d="M8.16544 10.6436C7.98685 10.4553 7.69038 10.4447 7.4988 10.6198L5.9751 12.072L5.33229 11.4054C5.15371 11.2171 4.85723 11.2066 4.66566 11.3816C4.48124 11.5748 4.48124 11.8788 4.66566 12.072L5.64176 13.0719C5.72624 13.1665 5.84828 13.2189 5.97505 13.2148C6.10064 13.213 6.22044 13.1617 6.30835 13.0719L8.16535 11.3102C8.34945 11.1413 8.36175 10.8551 8.19283 10.6711C8.18417 10.6615 8.17501 10.6523 8.16544 10.6436Z"
                                    fill="white" />
                                <path
                                    d="M14.9988 11.6674H9.52303C9.26005 11.6674 9.04688 11.8805 9.04688 12.1435C9.04688 12.4065 9.26005 12.6197 9.52303 12.6197H14.9988C15.2618 12.6197 15.4749 12.4065 15.4749 12.1435C15.4749 11.8805 15.2618 11.6674 14.9988 11.6674Z"
                                    fill="white" />
                                <path
                                    d="M8.16544 6.83436C7.98685 6.64611 7.69038 6.63549 7.4988 6.81057L5.9751 8.26283L5.33229 7.59619C5.15371 7.40795 4.85723 7.39733 4.66566 7.57241C4.48124 7.76562 4.48124 8.06962 4.66566 8.26283L5.64176 9.26277C5.72624 9.35737 5.84828 9.40969 5.97505 9.40563C6.10064 9.40385 6.22044 9.3525 6.30835 9.26277L8.16535 7.501C8.34945 7.33212 8.36175 7.04594 8.19283 6.86188C8.18417 6.85227 8.17501 6.84311 8.16544 6.83436Z"
                                    fill="white" />
                                <path
                                    d="M14.9988 7.85803H9.52303C9.26005 7.85803 9.04688 8.0712 9.04688 8.33418C9.04688 8.59716 9.26005 8.81033 9.52303 8.81033H14.9988C15.2618 8.81033 15.4749 8.59716 15.4749 8.33418C15.4749 8.0712 15.2618 7.85803 14.9988 7.85803Z"
                                    fill="white" />
                                <path
                                    d="M8.16544 14.4527C7.98685 14.2645 7.69038 14.2539 7.4988 14.429L5.9751 15.8812L5.33229 15.2146C5.15371 15.0263 4.85723 15.0158 4.66566 15.1908C4.48124 15.384 4.48124 15.688 4.66566 15.8812L5.64176 16.8812C5.72624 16.9758 5.84828 17.0281 5.97505 17.024C6.10064 17.0222 6.22044 16.9709 6.30835 16.8812L8.16535 15.1194C8.34945 14.9505 8.36175 14.6643 8.19283 14.4803C8.18417 14.4707 8.17501 14.4615 8.16544 14.4527Z"
                                    fill="white" />
                                <path
                                    d="M14.9988 15.4766H9.52303C9.26005 15.4766 9.04688 15.6897 9.04688 15.9527C9.04688 16.2157 9.26005 16.4289 9.52303 16.4289H14.9988C15.2618 16.4289 15.4749 16.2157 15.4749 15.9527C15.4749 15.6897 15.2618 15.4766 14.9988 15.4766Z"
                                    fill="white" />
                                  </svg>Оформити замовлення</button>
       </div>
      </div>
      </div>
     </div>
    `
        ROOT__SHOPPING.innerHTML = html
    }

}

const shoppingPage = new Shopping()

// function openModal() {
//   const modalBackground = document.querySelector('.modal-background');
//       modalBackground.style.height = '100%';
//       modalBackground.style.overflow = 'visible';
//   };
// ROOT__SHOPPING.addEventListener('click', openModal)
