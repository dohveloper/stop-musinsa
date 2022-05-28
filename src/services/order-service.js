import {orderModel} from '../db';

class OrderService {
  constructor(orderModel) {
    this.orderModel = orderModel;
  }

  // 고객 주문 내역 조회
  async getOrderList(orderInfo) {
    const {userId, fullname, phoneNumber} = orderInfo;
    const orderList = userId === 'Non-member' ?
        await this.orderModel.findByNamePhoneNumber(fullname, phoneNumber) :
        await this.orderModel.findById(userId);

    if (!orderList) {
      throw new Error('주문 내역이 없습니다. 다시 한 번 확인해 주세요.');
      return;
    }

    return orderList;
  }

  // 전체 주문 내역 확인(운영자)
  async getAllOrderList() {
    const orders = await this.orderModel.findAll();
    return orders;
  }

  // 주문 추가
  async addOrder(orderInfo) {
    const createNewOrder = await this.orderModel.create(orderInfo);
    return createNewOrder;
  }

  // 주문 상태 변경(취소, 완료)
  async setOrder(orderInfo) {
    const {orderId, userId, fullname, phoneNumber} = orderInfo;
    const orderList = userId === 'Non-member' ?
        await this.orderModel.findByNamePhoneNumber(fullname, phoneNumber) :
        await this.orderModel.findByUserId(userId);

    // 주문 내역 존재 확인
    if (!orderList) {
      throw new Error('주문 내역이 없습니다. 다시 한 번 확인해 주세요.');
      return;
    }

    // 일치하는 주문 여부 확인
    const metchOrder = orderList.find((data) => orderId === data._id);
    if (metchOrder.length < 1) {
      throw new Error('해당 주문이 존재하지 않습니다. 다시 하 번 확인해 주세요.');
      return;
    }

    const updateOrder =
        await this.orderModel.update(orderId, {state: orderInfo.state});
    return updateOrder;
  }
}

const orderService = new OrderService(orderModel);

export {orderService};
