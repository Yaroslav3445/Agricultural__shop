
let castleProduct = document.querySelector('.buy__castle')
let castleProductMobile = document.getElementById('curcleMobile')
class Castle {
    openShopping() {
        shoppingPage.render()
    }

    render(count) {
        let html = `
<div class="buy__counter">${count}</div>
</div>
`;
        let html2 = `
<img src="image/13.svg" alt="">
<div class="buy__counter">${count}</div>
`;
        castleProduct.innerHTML = html
        castleProductMobile.innerHTML = html2
    }
}
const castlePage = new Castle()

const castleStore = localStorageUntil.getProducts();
castlePage.render(castleStore.length)
