import { Injectable } from '@angular/core';
import {firstValueFrom, Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {OrdersResponse} from '../Interfaces/ApiResponses/OrdersResponse';
import {ServiceBaseService} from './service-base.service';
import {OrderProduct} from '../Interfaces/OrderProduct';

@Injectable({
  providedIn: 'root'
})
export class OrdersServiceService extends ServiceBaseService{

  constructor(private http: HttpClient) {
    super();
  }

  public async getUserOrders(): Promise<Observable<OrdersResponse[]>> {
    return this.http.get<OrdersResponse[]>(this.getConnectionString()+'Order/GetUserOrders');
  }

  public async createOrder(products: OrderProduct[]) {
    var productsWithCounts = JSON.stringify(products);
    var headersA = new HttpHeaders({'Content-Type': 'application/json'});
    var resp = this.http.post(this.getConnectionString()+'Order/MakeOrder', productsWithCounts, {headers:headersA});
    firstValueFrom(resp);
  }
}
