import {productModel} from '../db';

class ProductService {
  constructor(productModel) {
    this.productModel = productModel;
  }
  // 상품 등록
  async addProduct(productInfo) {
    // 구조분해 할당 후 스키마 구조에 따라 세팅 const {} = productInfo;
    const product = await this.productModel.addProduct(productInfo);
    return product;
  }

  // 전체상품 및 페이지 상품 조회
  async getProducts(page, show) {
    if (page && show) {
      // 모든 product 데이터 전달
      const products = await this.productModel.findByPage(page, show);
      return products;
    } else {
      // 모든 product 데이터 전달
      return await this.productModel.findAll();
    }
  }

  // 특정 상품 조회
  async getProductById(productId) {
    const product = await this.productModel.findById(page, show);
    return product;
  }

  async setProduct(productId, toUpdate) {
    let product = await this.productModel.findById(productId);

    // db에서 찾지 못한 경우, 에러 메시지 반환
    if (!product) {
      throw new Error('등록된 상품이 없습니다. 다시 한 번 확인해 주세요.');
    }

    product = await this.productModel.update({
      productId,
      update: toUpdate,
    });
    return product;
  }
}


const productService = new ProductService(productModel);

export {productService};
