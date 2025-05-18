import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {OrdersResponse} from '../Interfaces/ApiResponses/OrdersResponse';
import {ServiceBaseService} from './service-base.service';

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
}
