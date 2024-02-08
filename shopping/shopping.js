
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
                                        <img src=${img} alt="фото">
                                    </div>
                                    <div class="shopping__characteristics">
                                        <div class="shopping__prise">${prise}</div>
                                        <span class="shopping__volume">Ціна за 5 л</span>
                                        <div class="shopping__company">
                                            <span>Виробник</span>
                                            <div class="shopping__row"><img src="image/fms.svg" alt=""><span
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
                                        <img src=${img} alt="фото">
                                    </div>
                                    <div class="shopping__characteristics">
                                        <div class="shopping__prise">${prise}</div>
                                        <span class="shopping__volume">Ціна за 5 л</span>
                                        <div class="shopping__company">
                                            <span>Виробник</span>
                                            <div class="shopping__row"><img src="image/fms.svg" alt="виробник"><span
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
       <div class="modal__exit"><img src="image/exit.svg" alt="фото" onclick="shoppingPage.handleClear()"></div>
          <div class="shopping">
                 <h1 class="shopping__castle"><img src="image/mainleaf.svg" alt="листок">Кошик<img class="shopping__image"
                          src="image/mainleaf.svg" alt="листок"></h1>
                           ${htmlcatalog}
                     <div class="shopping__order">
                        <button class="shopping__button " onclick="shoppingPage.handleClear()">
                        <svg width="15" height="17">
                        <use xlink:href="sprite.svg#castle" />
                    </svg>Продовжити покупки</button>
                        <button class="shopping__button ">
                        <svg width="18" height="20">
                        <use xlink:href="sprite.svg#list" />
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

