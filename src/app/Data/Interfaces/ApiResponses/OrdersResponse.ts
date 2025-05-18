import {product_model} from '../product-model.interface';

export interface OrdersResponse {
  idOrder: number;
  products: OrderProducts[];
}

export interface OrderProducts {
  item1: product_model
  item2: number
}
