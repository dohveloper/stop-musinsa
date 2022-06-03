const totalProductsNum = document.querySelector('#cart-num');
const totalInProducts = document.querySelector('#product-num-all');
const checkAllBox = document.querySelector('#product-check-all');
const deleteAllBtn = document.querySelector('#deleteAllBtn');
const deleteBtn = document.querySelector('#deleteBtn');
const productBox = document.querySelector('#product-box');
const totalPrice = document.querySelector('#orderBtn');


const PRODUCTS_KEY = 'products';
let sum = 0;


let products = [];


// 로컬스토리지 저장
function saveProducts() {
  localStorage.setItem(PRODUCTS_KEY, JSON.stringify(products));
}


// 로컬 스토리지 받기
function getProducts() {
  setProductNum();
  if (productBox.innerHTML !== '') productBox.innerHTML = '';

  sum = 0;

  JSON.parse(localStorage.products).forEach((items, i) => {
    const element = JSON.parse(localStorage.getItem(PRODUCTS_KEY)).map((value, i) => {
      const index = i + 1;
      const {url, name, size, price, quantity} = value;
      const result = price * quantity;
      sum += result;

      return paintProductBox(index, url, name, size, price, quantity, result);
    });
    productBox.innerHTML = element.join('\n');
  });

  totalPrice.value = `총 ${sum.toLocaleString()}원 주문하기`;
  if (sum === 0) {
    totalPrice.disabled = 'disabled';
    totalPrice.classList.add('disabled');
    totalPrice.value = `장바구니가 비었습니다.`;
    totalPrice.style = `
      background-color: rgb(57, 56, 56);
      color: white;
      width: 290px;
      height: 60px;
      border-radius: 5px;
      text-align: center;
      font-size: 24px;
      font-weight: 600;
      cursor: auto;`;
  } else {
    totalPrice.removeAttribute('disabled');
    totalPrice.classList.remove('disabled');
    totalPrice.removeAttribute('style');
  }
}


// 화면에 getProducts 띄우기
function paintProductBox(index, url, name, size, price, quantity, result) {
  return `
  <div class="product">
      <p id="product-num">${index}</p>
      <input type="checkbox" name="" class="product-check" checked onclick="handleCheck(this)">
      <div class="product-info">
        <img src="${url}" alt="picture" style="width: 50px;">
        <div class="option">
          <p class="product-name">${name}</p>
          <p class="product-option">SIZE: ${size}</p>
        </div>
        </div>
        <p class="product-price">${Number(price).toLocaleString()}</p>
        <div class="product-quantity-box">
          <input type="button" value="-" onclick="changeValue(this);">
          <input type="number" class="product-quantity" value="${quantity}">
          <input type="button" value="+" onclick="changeValue(this);">
        </div>
        <p class="product-result">${Number(result).toLocaleString()}</p>
        <div class="delete-box">
          <input class="delete" type="button" value="삭제하기" onClick="deleteOne(this);">
        </div>
      </div>
    </div>
  </div>
  `;
}


// 상품 갯수 innerText 정리 함수
function setProductNum() {
  const numberOfProducts = JSON.parse(localStorage.products).length;
  totalProductsNum.innerText = numberOfProducts;
  totalInProducts.innerText = `전체 ${numberOfProducts}개`;
}


// 전체삭제 버튼 클릭 함수
function handleDeleteAllBtnClick() {
  if (localStorage.products.length === 0) {
    alert('장바구니가 비어있습니다.');
    return;
  }
  const result = confirm('장바구니를 비우시겠습니까?');

  if (result) {
    products = [];
    localStorage.removeItem(PRODUCTS_KEY);
    productBox.innerHTML = '';
  }
}


// 전체 체크박스 클릭 함수
function handleCheckAllClick(e) {
  const checkBoxes = document.querySelectorAll('.product-check');
  Array.from(checkBoxes).forEach((x) => x.checked = e.target.checked);
}


// 선택삭제 클릭 함수
function hadleDeleteBtnClick() {
  const result = confirm('선택한 상품을 제거하시겠습니까?');

  if (result) {
    Array.from(checkBoxes).forEach((checkBox) => {
      if (checkBox.checked === true) {
        const index = Number(checkBox.previousElementSibling.innerText);
        products.splice(index - 1, 1);
        saveProducts(products);
        getProducts();
      }
    });
  }
}


/* html 적용 함수 */


// 삭제하기 버튼 이벤트 함수
function deleteOne(target) {
  const result = confirm('장바구니에서 제거하시겠습니까?');

  if (result) {
    const product = target.parentElement.parentElement;
    const index = Number(product.firstElementChild.innerText);
    products.splice(index - 1, 1);

    saveProducts(products);
    getProducts();
  }
}


// 수량 변경 함수
function changeValue(target) {
  let quant = Number(target.parentElement.querySelector('.product-quantity').value);
  if (target.value === '+') {
    quant++;
  } else {
    if (quant === 0) {
      return;
    }
    quant--;
  }

  const index = Number(target.parentElement.parentElement.querySelector('#product-num').innerText);
  products[index - 1].quantity = quant;

  saveProducts(products);
  getProducts();
}


// 개별 체크박스 클릭 함수
function handleCheck(checkbox) {
  // 개별 체크박스 선언
  const checkBoxes = document.querySelectorAll('.product-check');
  let isChecked = true;
  Array.from(checkBoxes).forEach((box) => {
    if (box.checked === false) {
      isChecked = false;
      return;
    }
  });

  if (isChecked) {
    deleteAllBtn.checked = true;
  }


  const value = checkbox.checked;

  const result = checkbox.parentElement.querySelector('.product-result').innerText;
  const resultPrice = result.replace(/,/g, '');

  if (value === false) {
    // 하나라도 false면 전체 체크박스도 false
    checkAllBox.checked = false;

    sum -= Number(resultPrice);
  } else {
    sum += Number(resultPrice);
  }

  if (sum !== 0) {
    totalPrice.value = `총 ${sum.toLocaleString()}원 주문하기`;
  } else {
    totalPrice.value = `장바구니가 비었습니다.`;
  }
}


/* main */

// 화면에 localStorage 띄우기
saveProducts(products);
getProducts();


// 전체삭제 버튼 클릭 이벤트
deleteAllBtn.addEventListener('click', handleDeleteAllBtnClick);


// 전체 체크박스 클릭 이벤트
checkAllBox.addEventListener('click', handleCheckAllClick);


// 선택삭제 이벤트
deleteBtn.addEventListener('click', hadleDeleteBtnClick);
