
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
    <svg width="15" height="17">
        <use xlink:href="sprite.svg#castle" />
    </svg>
<div class="buy__counter">${count}</div>
`;
        castleProduct.innerHTML = html
        castleProductMobile.innerHTML = html2
    }
}
const castlePage = new Castle()

const castleStore = localStorageUntil.getProducts();
castlePage.render(castleStore.length)
