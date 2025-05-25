import {Component, Input} from '@angular/core';
import {UserAdressesResponse} from '../../Data/Interfaces/ApiResponses/userAdressesResponse';

@Component({
  selector: 'app-user-address',
  imports: [
  ],
  templateUrl: './user-address.component.html',
  styleUrl: './user-address.component.css'
})
export class UserAddressComponent {
  @Input()isSelected: boolean = false;
  @Input()Adress: UserAdressesResponse|null = null;
}
