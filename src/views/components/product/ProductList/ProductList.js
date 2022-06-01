export default class ProductList extends HTMLElement {
  constructor() {
    super();
    // html 추가
    this.innerHTML = `
        <div class="ProductList">
            <div class="ProductList__container Site__container">
                <h2 class="ProductList__title">실시간 랭킹</h2>
                <div class="ProductList__products">
                    <product-card></product-card>
                    <product-card></product-card>
                    <product-card></product-card>
                    <product-card></product-card>
                    <product-card></product-card>
                    <product-card></product-card>
                    <product-card></product-card>
                    <product-card></product-card>
                    <product-card></product-card>
                    <product-card></product-card>
                    <product-card></product-card>
                    <product-card></product-card>
                    <product-card></product-card>
                    <product-card></product-card>
                </div>
            </div>
        </div>
    `;

    // css 파일 추가
    const linkElem = document.createElement('link');
    linkElem.setAttribute('rel', 'stylesheet');
    linkElem.setAttribute('href', '/src/views/components/product/ProductList/ProductList.css');
    this.appendChild(linkElem);
  }
}
window.customElements.define('product-list', ProductList);
