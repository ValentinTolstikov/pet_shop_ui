import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserInfoResponse } from '../Interfaces/ApiResponses/user-info-response';
import {ServiceBaseService} from './service-base.service';
import {UserAddressResponse} from '../Interfaces/ApiResponses/userAddressResponse';

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

  public getUserAddress()
  {
    return this.http.get<UserAddressResponse>(this.getConnectionString()+'Account/GetUserAddress');
  }

  public updateUserAddress(userAddress: UserAddressResponse)
  {
    return this.http.post(this.getConnectionString()+'Account/UpdateUserAddress', userAddress);
  }
}
