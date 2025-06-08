import { Injectable } from '@angular/core';
import {ServiceBaseService} from './service-base.service';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {ProductStatisticResponse} from '../Interfaces/ApiResponses/ProductStatisticResponse';
import {UserResponse} from '../Interfaces/ApiResponses/UserResponse';

@Injectable({
  providedIn: 'root'
})
export class AdminService extends ServiceBaseService {

  constructor(private http: HttpClient) {
    super();
  }

  public async getProductsStats(): Promise<Observable<ProductStatisticResponse[]>> {
    return this.http.get<ProductStatisticResponse[]>(this.getConnectionString()+'Admin/GetProductsSales');
  }

  public async getUsers(): Promise<Observable<UserResponse[]>> {
    return this.http.get<UserResponse[]>(this.getConnectionString()+'Admin/GetUsers');
  }

  public async changeUserStatus(username: string, isActive: boolean): Promise<any> {
    var val = '';
    if(isActive){
      val = 'true'
    }
    else
    {
      val = 'false'
    }

    let params = new HttpParams().set("username", username).set("active", val);
    this.http.get<any>(this.getConnectionString() + 'Admin/ChangeUser', {params: params}).subscribe(success => {
      console.log(success);
    })
  }
}
