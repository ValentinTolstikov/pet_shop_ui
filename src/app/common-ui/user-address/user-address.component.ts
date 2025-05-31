import {Component, Input} from '@angular/core';
import {UserAddressResponse} from '../../Data/Interfaces/ApiResponses/userAddressResponse';

@Component({
  selector: 'app-user-address',
  imports: [
  ],
  templateUrl: './user-address.component.html',
  styleUrl: './user-address.component.css'
})
export class UserAddressComponent {
  @Input()isSelected: boolean = false;
  @Input()Adress: UserAddressResponse|null = null;
}
