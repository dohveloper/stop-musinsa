import * as Api from '/api.js';

const userName = document.querySelector('#name');
const phone = document.querySelector('#phone');
const postCode = document.querySelector('#sample4_postcode');
const roadAddress = document.querySelector('#sample4_roadAddress');
const jibunAddress = document.querySelector('#sample4_jibunAddress');
const detailAddress = document.querySelector('#sample4_detailAddress');
const payment = document.getElementsByName('payment');
const form = document.querySelector('form');

async function handleFormSubmit(e) {
  e.preventDefault();
  console.log(e);
  const fullname = userName.value;
  const phoneNumber = phone.value;
  const postalcode = postCode.value;
  const address1 = roadAddress.value;
  const address2 = detailAddress.value;
  const paymentMethod = Array.from(payment).filter(method => method.checked === true)[0].value;

  try {
    const data = {
      fullname,
      phoneNumber,
      address: {
        postalcode,
        address1,
        address2,
      },
      paymentMethod,
    }
  
    await Api.post('localhost:5000/api/order/', data);
  
    location.href = '../home/home.html';
  }
  catch(err) {
    console.error(err.stack);
    alert(`문제가 발생하였습니다. 확인 후 다시 시도해 주세요: ${err.message}`);
  }
}

form.addEventListener('submit', handleFormSubmit);