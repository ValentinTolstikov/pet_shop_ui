import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserInfoResponse } from '../Interfaces/ApiResponses/user-info-response';
import {ServiceBaseService} from './service-base.service';
import {UserAdressesResponse} from '../Interfaces/ApiResponses/userAdressesResponse';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService extends ServiceBaseService {

  constructor(private http: HttpClient) {
    super();
  }

  public getUserInfo()
  {
    return this.http.get<UserInfoResponse>(this.getConnectionString()+'Account/GetUserInfo');
  }

  public getUserAdresses()
  {
    return this.http.get<UserAdressesResponse[]>(this.getConnectionString()+'Account/GetUserAdresses');
  }
}
