import { Component } from '@angular/core';
import {UserAddressResponse} from '../../Data/Interfaces/ApiResponses/userAddressResponse';
import {UserServiceService} from '../../Data/Services/user-service.service';
import {MatDivider} from '@angular/material/divider';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-addresses',
  imports: [
    MatDivider,
    ReactiveFormsModule
  ],
  templateUrl: './user-addresses.component.html',
  styleUrl: './user-addresses.component.css'
})
export class UserAddressesComponent {
  address: UserAddressResponse|null = null;
  form:FormGroup;
  errormsg: string = '';

  constructor(private userService: UserServiceService, private fb:FormBuilder) {
    userService.getUserAddress().subscribe(address => {
      this.address = address;
    })

    this.form = this.fb.group({
      city: ['',Validators.required],
      streat: ['',Validators.required],
      house: ['',Validators.required],
      houseAdd: ['',Validators.required]
    });
  }

  onSubmit($event: any) {
    let val = this.form.value;

    if(!this.form.valid) {
      this.errormsg="Invalid data"
      return;
    }
    else {
      this.errormsg=""
    }

    this.userService.updateUserAddress({
      city: val.city,
      house: val.house,
      streat: val.streat,
      IdUser: 1,
      houseAdditional: val.houseAdd,
      Id: 1
    }).subscribe(r=>console.log(r));
  }
}
