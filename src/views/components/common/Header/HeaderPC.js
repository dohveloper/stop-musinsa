import {JWTDecode} from '../../../js/useful-functions.js';

export default class HeaderPC extends HTMLElement {
  constructor() {
    super();
    // html 추가
    this.innerHTML = `
        <div class="Header__pc">
                <div class="Header__main">
                    <div class="HeaderMain__container Site__container">
                        <div class="HeaderMain__left">
                            <h1 class="HeaderMain__logo">
                                <a class="HeaderMain__logoLink" href="/">STOP MUSINSA</a>
                            </h1>
                            <input class="HeaderMain__search" />
                        </div>
                        <div class="HeaderMain__right">
                            <nav class="HeaderMainNav">
                                <ul class="HeaderMainNav__list">
                                    <li class="HeaderMainNavItem">
                                        <a class="HeaderMainNavItem__link HeaderMainNavItem__link--active" href="/">홈</a>
                                        <div class="HeaderMainNavItem__underbar"></div>
                                    </li>
                                    <li class="HeaderMainNavItem">
                                        <a class="HeaderMainNavItem__link" href="/tops">상의</a>
                                    </li>
                                    <li class="HeaderMainNavItem">
                                        <a class="HeaderMainNavItem__link" href="/pants">바지</a>
                                    </li>
                                    <li class="HeaderMainNavItem">
                                        <a class="HeaderMainNavItem__link" href="/outwears">아우터</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div class="Header__sub">
                    <div class="HeaderSub__container Site__container">무신사 게섯거라</div>
                </div>
                <div class="Header__member">
                    <div class="HeaderMember__container Site__container">
                        <a class="HeaderMemberButton__link" href="/login">
                            <button class="Button Button--outline">로그인</button>
                        </a>
                        <div class="HeaderMemberMenus">
                            <div class="HeaderMemberMenu">
                                <a class="HeaderMemberMenu__link" href="/register">회원가입</a>
                            </div>
                            <div class="HeaderMemberMenu">
                                <a class="HeaderMemberMenu__link" href="/cart">장바구니</a>
                                <span class="HeaderMemberMenu__badge">0</span>
                            </div>
                            <div class="HeaderMemberMenu">
                                <a class="HeaderMemberMenu__link" href="/register">회원 가입 EVENT. 신규 가입 후 바로 사용 가능한 18% 할인 쿠폰 / 게섯거라 스탠다드 990원 구매 기회</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    `;
    this.renderByRole();
  }

  renderByRole() {
    const token = sessionStorage.getItem('token');
    const {role} = JWTDecode(token);
    const nav = document.querySelector('.HeaderMainNav__list');
    const member = document.querySelectorAll('.HeaderMember__container', '.Site__container')[0];
    // 로그인 되어있을 시 로그아웃버튼
    if (token) {
      member.innerHTML = `
        <a class="HeaderMemberButton__link">
            <button class="Button Button--outline">로그아웃</button>
        </a>
        <div class="HeaderMemberMenus">환영합니다!</div>`;
    }
    member.firstElementChild.addEventListener('click', ()=>{
      sessionStorage.removeItem('token');
      window.location.replace('/');
    });

    // admin 계정
    if (role === 'admin') {
      nav.innerHTML += `
            <li class="HeaderMainNavItem">
                <a class="HeaderMainNavItem__link" href="/admin">admin</a>
            </li>
        `;
    }
  }
}
window.customElements.define('common-header-pc', HeaderPC);
