import {Router} from 'express';
import is from '@sindresorhus/is';
// 폴더에서 import하면, 자동으로 폴더의 index.js에서 가져옴
import {loginRequired} from '../middlewares';
import {orderService} from '../services';

const orderRouter = Router();

// 주문 조회
orderRouter.get('/orderlist/:userId/:fullname/:phoneNumber',
    async (req, res, next) => {
      try {
        const {userId, fullname, phoneNumber} = req.params;
        const orderInfo = {
          userId: userId,
          fullname: fullname,
          phoneNumber: phoneNumber,
        };
        const order = await orderService.getOrderList(orderInfo);
        res.status(200).json(order);
      } catch (err) {
        next(err);
      }
    });

// 전체 주문 목록 조회
orderRouter.get('/orderalllist', loginRequired, async (req, res, next) => {
  try {
    const orders = await orderService.getAllOrderList();
    res.status(200).json(orders);
  } catch (err) {
    next(err);
  }
});

// 주문 추가
orderRouter.post('/addorder', async (req, res, next) => {
  try {
    const {
      products,
      userId,
      fullname,
      phoneNumber,
      address,
      total,
      paymentMethod,
    } = req.body;

    const orderInfo = {
      products: products,
      userId: userId,
      fullname: fullname,
      phoneNumber: phoneNumber,
      address: address,
      total: total,
      paymentMethod: paymentMethod,
    };
    const newOrder = await orderService.addOrder(orderInfo);
    res.status(201).json(newOrder);
  } catch (err) {
    next(err);
  }
});

// 주문 상태 변경
orderRouter.patch('/orders/:userId/:fullname/:phoneNumber/:state',
    async (req, res, next) => {
      try {
        const {userId, fullname, phoneNumber, state} = req.params;
        const orderInfo = {
          userId: userId,
          fullname: fullname,
          phoneNumber: phoneNumber,
          state: state,
        };
        const orderList = await orderService.setOrder(orderInfo);
        res.status(200).json(orderList);
      } catch (err) {
        next(err);
      }
    });

export default orderRouter;
