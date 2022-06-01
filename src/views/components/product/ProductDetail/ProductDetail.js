export default class ProductDetail extends HTMLElement {
  constructor() {
    super();
    // html 추가
    const product = {
      brand: '캘빈클라인 골프',
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
    this.innerHTML = `
       <div class="ProductDetail">
            <div class="ProductDetail__brandBar">
                <div class="Site__container">${product.brand}</div>
            </div>
            <div class="ProductDetail__container">
                <div class="ProductDetail__header">
                    <div class="ProductDetailHeader__breadcrumb">
                        <a>${product.category}</a>
                    </div>
                    <p class="ProductDetailHeader__brand">${product.brand}</p>
                    <h2 class="ProductDetailHeader__title">${product.name}</h2>
                    <p class="ProductDetailHeader__price">${product.price}원</p>
                    <div class="ProductDetailHeader__border"></div>
                    <div class="ProductDetailHeader__info">
                        <p class="ProductDetailHeaderInfo__title">게섯거라 판매가</h4>
                        <p class="ProductDetailHeaderInfo__body">${product.price}원</p>
                    </div>
                    <div class="ProductDetailHeader__info">
                        <p class="ProductDetailHeaderInfo__title">게섯거라 적립금</h4>
                        <p class="ProductDetailHeaderInfo__body">최대 ${product.point}원</p>
                    </div>
                    <div class="ProductDetailHeader__textBoxes">
                        <div class="TextBox TextBox--red">게섯거라스토어는 전 상품 유료배송입니다.</div>
                        <div class="TextBox">회원혜택 없음</div>
                    </div>
                </div>
                <div class="ProductDetail__topContainer">
                    <div class="ProductDetail__images">
                        <div class="ProductDetailImages__imageContainer">
                            <img
                                class="ProductDetailImages__image"
                                src="${product.image}"
                                alt="product"
                            />
                        </div>
                    </div>
                    <div class="ProductDetail__content">
                        <div class="ProductDetailGroup">
                            <h3 class="ProductDetailGroup__header">Product Info <span class="ProductDetailGroup__headerCaption">제품정보</span></h3>
                            <div class="ProductDetailGroupItem">
                                <h4 class="ProductDetailGroupItem__title">브랜드/품번</h4>
                                <p class="ProductDetailGroupItem__content">${product.brand} /${product.modelNumber}</p>
                            </div>
                            <div class="ProductDetailGroupItem">
                                <h4 class="ProductDetailGroupItem__title">시즌/성별</h4>
                                <p class="ProductDetailGroupItem__content">${product.season} / ${product.sex}</p>
                            </div>
                            <div class="ProductDetailGroupItem">
                                <h4 class="ProductDetailGroupItem__title">조회수(1개월)</h4>
                                <p class="ProductDetailGroupItem__content">${product.view}회 이상</p>
                            </div>
                            <div class="ProductDetailGroup__border"></div>
                        </div>
                        <div class="ProductDetailGroup">
                            <h3 class="ProductDetailGroup__header">Delivery Info <span class="ProductDetailGroup__headerCaption">배송정보</span></h3>
                            <div class="ProductDetailGroupItem">
                                <h4 class="ProductDetailGroupItem__title">출고정보</h4>
                                <p class="ProductDetailGroupItem__content">${product.deliveryStart} 출고</p>
                            </div>
                            <div class="ProductDetailGroupItem">
                                <h4 class="ProductDetailGroupItem__title">배송방법</h4>
                                <p class="ProductDetailGroupItem__content">${product.deliveryMethod}</p>
                            </div>
                            <div class="ProductDetailGroup__border"></div>
                        </div>
                        <div class="ProductDetailGroup">
                            <h3 class="ProductDetailGroup__header">Price Info <span class="ProductDetailGroup__headerCaption">가격정보</span></h3>
                            <div class="ProductDetailGroupItem">
                                <h4 class="ProductDetailGroupItem__title">게섯거라 판매가</h4>
                                <p class="ProductDetailGroupItem__content">${product.price}원</p>
                            </div>
                            <div class="ProductDetailGroupItem">
                                <h4 class="ProductDetailGroupItem__title">게섯거라 적립금</h4>
                                <p class="ProductDetailGroupItem__content">최대 ${product.point}원</p>
                            </div>
                            <div class="ProductDetailGroup__textBoxes">
                                <div class="TextBox TextBox--red">게섯거라스토어는 전 상품 유료배송입니다.</div>
                                <div class="TextBox">회원혜택 없음</div>
                            </div>
                            <div class="ProductDetailGroup__border"></div>
                        </div>
                        <div class="ProductDetailOption__container">
                            <div class="ProductDetailOption">
                                <select class="ProductDetailOption__list">
                                    <option class="ProductDetailOption__item" value="0">옵션 선택</option>
                                    <option class="ProductDetailOption__item" value="1">Audi</option>
                                    <option class="ProductDetailOption__item" value="2">BMW</option>
                                    <option class="ProductDetailOption__item" value="3">Citroen</option>
                                    <option class="ProductDetailOption__item" value="4">Ford</option>
                                    <option class="ProductDetailOption__item" value="5">Honda</option>
                                    <option class="ProductDetailOption__item" value="6">Jaguar</option>
                                </select>
                            </div>
                            <div class="ProductDetailOption__price">
                                <p>총 상품 금액</p>
                                <p>0원</p>
                            </div>
                        </div>
                        <div class="ProductDetailPayment">
                            <button class="ProductDetailPayment__buyButton">바로구매</button>
                            <button class="ProductDetailPayment__cartButton">
                                <img src="../../assets/images/shopping_bag.png" alt="shopping_bag" />
                            </button>
                        </div>
                    </div>
                </div>
                <div class="ProductDetail__mobileContent">   
                    <div class="ProductDetail__border"></div>
                    <div class="ProductDetailMobileContent__container">
                         <div class="ProductDetailMobileContent__header">
                        <h3 class="ProductDetailMobileContentHeader__title">Product Details <span class="ProductDetailInfoHeader__titleCaption">상품정보</span></h3>
                        
                    </div>           
                     <div class="ProductDetailMobileContent__info">
                        <p class="ProductDetailMobileContentInfo__title">게섯거라 적립금</h4>
                        <p class="ProductDetailMobileContentInfo__body">최대 3,1690원</p>
                     </div>
                     <div class="ProductDetailMobileContent__info">
                        <p class="ProductDetailMobileContentInfo__title">게섯거라 적립금</h4>
                        <p class="ProductDetailMobileContentInfo__body">최대 3,1690원</p>
                     </div>
                     <div class="ProductDetailMobileContent__info">
                        <p class="ProductDetailMobileContentInfo__title">게섯거라 적립금</h4>
                        <p class="ProductDetailMobileContentInfo__body">최대 3,1690원</p>
                     </div>
                     <div class="ProductDetailMobileContent__info">
                        <p class="ProductDetailMobileContentInfo__title">게섯거라 적립금</h4>
                        <p class="ProductDetailMobileContentInfo__body">최대 3,1690원</p>
                     </div>
                     <div class="ProductDetailMobileContent__info">
                        <p class="ProductDetailMobileContentInfo__title">게섯거라 적립금</h4>
                        <p class="ProductDetailMobileContentInfo__body">최대 3,1690원</p>
                     </div>
                    </div>
                    <div class="ProductDetail__border"></div>
                </div>
                <div class="ProductDetail__info">
                    <div class="ProductDetailInfo__border"></div>
                    <div class="ProductDetailInfo__header">
                        <h3 class="ProductDetailInfoHeader__title">Info <span class="ProductDetailInfoHeader__titleCaption">정보</span></h3>
                        <p class="ProductDetailInfoHeader__report">해당 상품정보에 문제가 있으면 알려주세요.</p>
                    </div>
                    <div class="ProductDetailInfo__body">
                        <img class="ProductDetailInfo__image" src="${product.detailImage}" alt="detail info" />
                    </div>
                </div>
            </div>
        </div>
    `;

    // css 파일 추가
    const linkElem = document.createElement('link');
    linkElem.setAttribute('rel', 'stylesheet');
    linkElem.setAttribute('href', '/src/views/components/product/ProductDetail/ProductDetail.css');
    this.appendChild(linkElem);
  }
}
window.customElements.define('product-detail', ProductDetail);
