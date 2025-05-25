import { Component } from '@angular/core';
import {UserAddressComponent} from "../user-address/user-address.component";
import {UserAdressesResponse} from '../../Data/Interfaces/ApiResponses/userAdressesResponse';
import {UserServiceService} from '../../Data/Services/user-service.service';

@Component({
  selector: 'app-user-addresses',
  imports: [
    UserAddressComponent
  ],
  templateUrl: './user-addresses.component.html',
  styleUrl: './user-addresses.component.css'
})
export class UserAddressesComponent {
  adresses: UserAdressesResponse[] = [];

  constructor(private userService: UserServiceService) {
    userService.getUserAdresses().subscribe(adresses => {
      this.adresses = adresses;
    })
  }
}
