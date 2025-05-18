import { Component } from '@angular/core';
import {UserOrderComponent} from '../user-order/user-order.component';
import {OrdersServiceService} from '../../Data/Services/orders-service.service';
import {OrdersResponse} from '../../Data/Interfaces/ApiResponses/OrdersResponse';

@Component({
  selector: 'app-user-orders',
  imports: [
    UserOrderComponent
  ],
  templateUrl: './user-orders.component.html',
  styleUrl: './user-orders.component.css'
})
export class UserOrdersComponent {
  orders: OrdersResponse[] = [];

  constructor(private ordersService: OrdersServiceService) {
    this.ordersService.getUserOrders().then(orders => {
      orders.subscribe(ord=>this.orders=ord);
    });
  }
}
