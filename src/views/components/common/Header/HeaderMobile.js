export default class HeaderMobile extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
            <div class="Header__mobile">
                <div class="HeaderMobile__default">
                    <div class="HeaderMobileDefault__main">
                        <div class="HeaderMobileDefault__container Site__container">
                            <div>
                                <a href="/cart" class="HeaderMobileDefault__icon HeaderMobileDefault__cart">
                                    <img src="../../assets/images/shopping_bag.png" alt="cart" />
                                </a>
                            </div>
                            <div>
                                <div class="HeaderMobileDefault__logo">
                                    <a class="HeaderMobileDefault__logoLink" href="/">STOP MUSINSA</a>
                                </div>
                            </div>
                            <div>
                                <a href="/login" class="HeaderMobileDefault__profile">
                                    <img src="../../assets/images/profile.png" alt="profile" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="HeaderMobileDefault__navbar">
                        <nav class="HeaderMobileDefaultNav">
                            <ul class="HeaderMobileDefaultNav__list">
                                <li class="HeaderMobileDefaultNavItem">
                                    <a class="HeaderMobileDefaultNavItem__link HeaderMobileDefaultNavItem__link--active" href="/">홈</a>
                                    <div class="HeaderMobileDefaultNavItem__underbar"></div>
                                </li>
                                <li class="HeaderMobileDefaultNavItem">
                                    <a class="HeaderMobileDefaultNavItem__link" href="/tops">상의</a>
                                </li>
                                <li class="HeaderMobileDefaultNavItem">
                                    <a class="HeaderMobileDefaultNavItem__link" href="/pants">바지</a>
                                </li>
                                <li class="HeaderMobileDefaultNavItem">
                                    <a class="HeaderMobileDefaultNavItem__link" href="/outwears">아우터</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div class="HeaderMobile__detail">
                    <div class="HeaderMobileDetail__container Site__container">
                        <div class="HeaderMobileDetail__left">
                            <a href="javascript:history.back()" class="HeaderMobileDetail__link HeaderMobileDetail__prev">
                                <img class="HeaderMobileDetail__icon" src="../../assets/images/back.png" alt="back" />
                            </a>
                        </div>
                        <div class="HeaderMobileDetail__right">
                            <a href="/login" class="HeaderMobileDetail__link HeaderMobileDetail__profile">
                                <img class="HeaderMobileDetail__icon" src="../../assets/images/profile.png" alt="profile" />
                            </a>
                            <a href="/cart" class="HeaderMobileDetail__link HeaderMobileDetail__cart">
                                <img class="HeaderMobileDetail__icon" src="../../assets/images/shopping_bag.png" alt="cart" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
    `;
    this.renderByType();
  }
  renderByType() {
    const type = this.getAttribute('type');
    if (type === 'detail') {
      this.querySelector('.HeaderMobile__default').style.display = 'none';
      this.querySelector('.HeaderMobile__detail').style.display = 'block';
    } else {
      this.querySelector('.HeaderMobile__default').style.display = 'block';
      this.querySelector('.HeaderMobile__detail').style.display = 'none';
    }
  }
}
window.customElements.define('common-header-mobile', HeaderMobile);
