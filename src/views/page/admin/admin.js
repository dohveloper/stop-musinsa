import Sidebar from './sidebar.js';
import CategoryEdit from './categoryEdit.js';
import ProductEdit from './productEdit.js';
import OrderEdit from './orderEdit.js';
import UserEdit from './userEdit.js';
import * as Api from '../../js/api.js';
export default class Admin {
  sideCategories = ['카테고리', '상품 목록', '주문 목록', '유저 목록'];
  constructor(target) {
    this.page = '';
    this.sideContainer = document.querySelector('.SideBarContainer');
    this.editContainer = document.querySelector('.EditContainer');
    this.edit = new CategoryEdit(this.editContainer);
    this.sidebar = new Sidebar(this.sideContainer, this.sideCategories, this.setPage);
  }

  setPage = (page)=>{
    if (page === '카테고리') {
      this.edit = new CategoryEdit(this.editContainer);
    } else if (page === '상품 목록') {
      this.edit = new ProductEdit(this.editContainer);
    } else if (page === '주문 목록') {
      this.edit = new OrderEdit(this.editContainer);
    } else {
      this.edit = new UserEdit(this.editContainer);
    }
  };
}
const token = sessionStorage.getItem('token');

if (!token) {
  alert('로그인이 필요합니다.');
  window.location.replace('/');
} else {
  const user = await Api.get('/api/user');
  if (user.role !== 'admin') {
    alert('admin 계정이 필요합니다.');
    window.location.replace('/');
  }
}
const main = document.querySelector('main');
const admin = new Admin(main);
