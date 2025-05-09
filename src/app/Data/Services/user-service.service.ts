import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {ProductResponse} from '../Interfaces/ApiResponses/product-response';
import {UserInfoResponse} from '../Interfaces/ApiResponses/user-info-response';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private readonly prod_host: string = 'https://valentintolstikov-petshopapi-2ad0.twc1.net/';
  private readonly dev_host: string = 'http://localhost:8080/';

  constructor(private http: HttpClient) {

  }

  public getUserInfo()
  {
    return this.http.get<UserInfoResponse>(this.prod_host+'Account/GetUserInfo');
  }
}
