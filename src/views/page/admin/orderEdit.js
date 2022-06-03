import * as Api from '../../js/api.js';


const mock = `{"_id":"629480f6a22d32e1a62eeb54","products":[{"product":{
        "_id": "629662419b1fc8258d11f94b",
        "name": "좋은 반팔",
        "price": 30000,
        "image": "http://localhost:5000/uploads/1654022721376_좋은 반팔_elice-rabbit.png",
        "brand": "standard",
        "sex": "male",
        "description": "아좋다",
        "colors": [
            {
                "color": {
                    "_id": "62947ec9521fe0e0e188fbc9",
                    "colorName": "blue",
                    "createdAt": "2022-05-30T08:22:33.767Z",
                    "updatedAt": "2022-05-30T08:22:33.767Z",
                    "__v": 0
                },
                "_id": "629662419b1fc8258d11f94c"
            }
        ],
        "sizes": [
            {
                "size": {
                    "_id": "62947e95521fe0e0e188fbc5",
                    "sizeName": "Large",
                    "createdAt": "2022-05-30T08:21:41.274Z",
                    "updatedAt": "2022-05-30T08:21:41.274Z",
                    "__v": 0
                },
                "_id": "629662419b1fc8258d11f94d"
            },
            {
                "size": {
                    "_id": "62965d6e465e33c696d8bbf8",
                    "sizeName": "Small",
                    "createdAt": "2022-05-31T18:24:46.560Z",
                    "updatedAt": "2022-05-31T18:24:46.560Z",
                    "__v": 0
                },
                "_id": "629662419b1fc8258d11f94e"
            }
        ],
        "categories": {
            "_id": "6295b1824c3cc0d5a2b0ab77",
            "item": "상의",
            "subItem": "반팔",
            "createdAt": "2022-05-31T06:11:14.073Z",
            "updatedAt": "2022-05-31T06:11:14.073Z",
            "__v": 0
        },
        "createdAt": "2022-05-31T18:45:21.402Z",
        "updatedAt": "2022-05-31T18:45:21.402Z",
        "__v": 0
    },"count":3,"_id":"629662419b1fc8258d11f94b"},{"product":{
        "_id": "629661ace6ec68259064ff37",
        "name": "좋은 반팔",
        "price": 30000,
        "image": "http://localhost:5000/uploads/1654022572385_좋은 반팔_elice-rabbit.png",
        "brand": "standard",
        "sex": "male",
        "description": "아좋다",
        "colors": [
            {
                "color": {
                    "_id": "62947e8f521fe0e0e188fbc1",
                    "colorName": "red",
                    "createdAt": "2022-05-30T08:21:35.170Z",
                    "updatedAt": "2022-05-30T08:21:35.170Z",
                    "__v": 0
                },
                "_id": "629661ace6ec68259064ff38"
            },
            {
                "color": {
                    "_id": "62947ec9521fe0e0e188fbc9",
                    "colorName": "blue",
                    "createdAt": "2022-05-30T08:22:33.767Z",
                    "updatedAt": "2022-05-30T08:22:33.767Z",
                    "__v": 0
                },
                "_id": "629661ace6ec68259064ff39"
            }
        ],
        "sizes": [
            {
                "size": {
                    "_id": "62947e95521fe0e0e188fbc5",
                    "sizeName": "Large",
                    "createdAt": "2022-05-30T08:21:41.274Z",
                    "updatedAt": "2022-05-30T08:21:41.274Z",
                    "__v": 0
                },
                "_id": "629661ace6ec68259064ff3a"
            },
            {
                "size": {
                    "_id": "62965d69465e33c696d8bbf4",
                    "sizeName": "Medium",
                    "createdAt": "2022-05-31T18:24:41.136Z",
                    "updatedAt": "2022-05-31T18:24:41.136Z",
                    "__v": 0
                },
                "_id": "629661ace6ec68259064ff3b"
            }
        ],
        "categories": {
            "_id": "62945a035787546c6cece61e",
            "item": "상의",
            "subItem": "긴팔",
            "createdAt": "2022-05-30T05:45:39.343Z",
            "updatedAt": "2022-05-30T05:45:39.343Z",
            "__v": 0
        },
        "createdAt": "2022-05-31T18:42:52.412Z",
        "updatedAt": "2022-05-31T18:42:52.412Z",
        "__v": 0
    },"count":1,"_id":"629480f6a22d32e1a62eeb56"}],"userId":"629297c8d7aa92ec159e84b9","fullname":"musinsa","phoneNumber":"01312312124","address":{"postalCode":"412412","address1":"dsadava","address2":"wfasfasfsfa"},"total":41000,"paymentMethod":"card","state":"배송중","createdAt":"2022-05-30T08:31:50.470Z","updatedAt":"2022-05-30T08:31:50.470Z","__v":0}`;
export default class OrderEdit {
  constructor(target, category) {
    this.target = target;
    this.target.innerHTML = ``;
    this.title = document.createElement('h1');
    this.title.className = 'EditContainer__title';
    this.target.appendChild(this.title);
    this.orderContiner = document.createElement('div');
    this.orderContiner.className = 'orderContiner';
    this.target.appendChild(this.orderContiner);
    this.orderContiner.innerHTML = `
      <div class='orderContents'>
          <h3>주문자</h3>
          <h3>결제</h3>
          <h3>주문상품</h3>
          <h3>주소</h3>
          <h3>총 주문액</h3>
          <h3>배송상태</h3>
      </div>
    `;
    this.render();
  }
  async render() {
    this.title.innerText = `주문 목록`;
    const orderList = await Api.get('/api/order/orders');
    orderList.forEach(async (order)=> {
      await this.orderli(JSON.parse(mock), this.orderContiner);
    });
  }

  async orderli(data, target) {
    const container = document.createElement('div');
    container.className = 'orderContents';
    container.innerHTML = `
    <h3>${data.fullname}</h3>
        <h3>${data.paymentMethod}</h3>
        <div>
          <ol>
            ${data.products.map(({product, count})=>`<li><h4>${product.brand}</h4><h5>${product.name}</h5><h5>${count}</h5></li>`)}
          </ol>
        </div>
        <div>
          <ol>
            <li><h3>${data.address.address1}</h3></li>
            <li><h4>${data.address.address2}</h4></li>
            <li><h4>${data.address.postalCode}</h4></li>
          </ol>
        </div>
        <h3>
          ${data.total}
        </h3>
    `;
    const selectConteiner = document.createElement('div');
    const selectState = document.createElement('select');
    selectState.name = 'state';
    selectState.innerHTML = `
      <option value='준비중' ${data.state === '준비중' ? 'selected' : ''}>준비중</option>
      <option value='배송중' ${data.state === '배송중' ? 'selected' : ''}>배송중</option>
      <option value='배송완료' ${data.state === '배송완료' ? 'selected' : ''}>배송완료</option>
    `;
    selectState.addEventListener('change', async (e)=>{
      await Api.patch(`/api/order/orders`, data._id + '/' + e.target.value);
    });
    selectConteiner.appendChild(selectState);
    container.appendChild(selectConteiner);
    target.appendChild(container);
  }
}
