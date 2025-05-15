import { Component } from '@angular/core';
import {UserOrderComponent} from '../user-order/user-order.component';

@Component({
  selector: 'app-user-orders',
  imports: [
    UserOrderComponent
  ],
  templateUrl: './user-orders.component.html',
  styleUrl: './user-orders.component.css'
})
export class UserOrdersComponent {

}
