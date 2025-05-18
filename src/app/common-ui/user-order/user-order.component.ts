import {Component, Input, OnInit} from '@angular/core';
import {MatDivider} from '@angular/material/divider';
import {OrdersResponse} from '../../Data/Interfaces/ApiResponses/OrdersResponse';

@Component({
  selector: 'app-user-order',
  imports: [
    MatDivider
  ],
  templateUrl: './user-order.component.html',
  styleUrl: './user-order.component.css'
})
export class UserOrderComponent implements OnInit {
  @Input() order: OrdersResponse|null = null;

  SumPrice: number = 0;
  TotalCnt: number = 0;

  ngOnInit() {
    this.order?.products.forEach(p=>{
      this.TotalCnt += p.item2;
      this.SumPrice += p.item2*p.item1.price
    })
  }
}
