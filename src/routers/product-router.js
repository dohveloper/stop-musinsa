import {Router} from 'express';
import is from '@sindresorhus/is';
import {loginRequired} from '../middlewares';
import {productService} from '../services';

const productRouter = Router();

//  GET api/product(상품 목록, 페이지네이션)
productRouter.get('/', async (req, res, next) => {
  const {page, show} = req.query;
  try {
    let product;
    // 로그인 여부에 관계없이 상품데이터 전달
    if (page && show) {
      // pagenation 적용
      product = await productService.getProducts(page, show);
    } else {
      // 미적용
      product = await productService.getProducts();
    }
    res.status(201).json(product);
  } catch (error) {
    next(error);
  }
});

//  GET api/product/:id(상품 세부사항)
productRouter.get('/:productId', async (req, res, next) => {
  try {
    const {productId} = req.params;
    const product = await productService.getProductById(productId);
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
});

//  POST api/product/ (상품 등록)
productRouter.post('/', loginRequired, async (req, res, next) => {
  try {
    // application/json 설정을 프론트에서 안 하면, body가 비어 있게 됨.
    if (is.emptyObject(req.body)) {
      throw new Error(
          'headers의 Content-Type을 application/json으로 설정해주세요',
      );
    }
    // only admin
    if (req.role !== 'admin') {
      throw new Error(
          '관리자만 사용 가능한 기능입니다.',
      );
    }
    // product 스키마에 따라
    // const productInfo = req.body;
    const product = await productService.addProduct(productInfo);
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
});
//  PATCH api/product/:productId (상품 수정)
productRouter.patch('/:productId', loginRequired, async (req, res, next) => {
  try {
    // application/json 설정을 프론트에서 안 하면, body가 비어 있게 됨.
    if (is.emptyObject(req.body)) {
      throw new Error(
          'headers의 Content-Type을 application/json으로 설정해주세요',
      );
    }
    // only admin
    if (req.role !== 'admin') {
      throw new Error(
          '관리자만 사용 가능한 기능입니다.',
      );
    }
    const {productId} = req.params;
    // product 스키마에 따라
    // const productInfo = req.body;
    const product = await productService.setProduct(productId, productInfo);
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
});

//  DELETE api/product/:postId (상품 수정)
productRouter.delete('/:postId', loginRequired, async (req, res, next) => {
  try {
    // application/json 설정을 프론트에서 안 하면, body가 비어 있게 됨.
    if (is.emptyObject(req.body)) {
      throw new Error(
          'headers의 Content-Type을 application/json으로 설정해주세요',
      );
    }
    // only admin
    if (req.role !== 'admin') {
      throw new Error(
          '관리자만 사용 가능한 기능입니다.',
      );
    }

    await productService.deleteProduct(productId);
    res.status(200).send('상품 삭제 완료');
  } catch (error) {
    next(error);
  }
});
export default productRouter;
