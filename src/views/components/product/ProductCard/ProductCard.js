export default class ProductCard extends HTMLElement {
  constructor() {
    super();
    const product = {
      brand: '캘빈클라인 골프',
      ranking: 1,
      category: '원피스',
      name: '[NF]링클워머 스워트 셋업',
      price: '98000',
      point: '3169',
      image: 'https://image.msscdn.net/images/goods_img/20210609/1989228/1989228_4_500.jpg?t=20210705115809',
      modelNumber: '2021SS-02-KHO-2',
      season: '2021 S/S',
      sex: '여',
      view: '56000',
      deliveryStart: '06.15',
      deliveryMethod: '국내배송/입점사 배송',
      options: [],
      detailImage: 'https://image.musinsa.com/images/prd_img/2022052514500100000046988.jpg',
    };
    // html 추가
    this.innerHTML = `
        <div class="ProductCard">
            <div class="ProductCard__header">
                <div class="ProductCard__ranking">${product.ranking}위</div>
            </div>
            <div class="ProductCard__imageContainer">
                <img class="ProductCard__image" src="${product.image}" alt="product_image" />
            </div>
            <div class="ProductCard__body">
                <h3 class="ProductCard__brand">${product.brand}</h3>
                <p class="ProductCard__title">${product.name}</p>
                <p class="ProductCard__price">${product.price}원</p>
            </div>
        </div>
    `;

    // css 파일 추가
    const linkElem = document.createElement('link');
    linkElem.setAttribute('rel', 'stylesheet');
    linkElem.setAttribute('href', '/src/views/components/product/ProductCard/ProductCard.css');
    this.appendChild(linkElem);
  }
}
window.customElements.define('product-card', ProductCard);
