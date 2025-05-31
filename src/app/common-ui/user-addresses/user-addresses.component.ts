import { Component } from '@angular/core';
import {UserAddressResponse} from '../../Data/Interfaces/ApiResponses/userAddressResponse';
import {UserServiceService} from '../../Data/Services/user-service.service';
import {MatDivider} from '@angular/material/divider';

@Component({
  selector: 'app-user-addresses',
  imports: [
    MatDivider
  ],
  templateUrl: './user-addresses.component.html',
  styleUrl: './user-addresses.component.css'
})
export class UserAddressesComponent {
  address: UserAddressResponse|null = null;

  constructor(private userService: UserServiceService) {
    userService.getUserAddress().subscribe(address => {
      this.address = address;
    })
  }
}
