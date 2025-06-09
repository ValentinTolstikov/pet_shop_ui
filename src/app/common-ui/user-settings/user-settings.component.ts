import { Component } from '@angular/core';
import {MatDivider} from '@angular/material/divider';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-user-settings',
    imports: [
        MatDivider,
        ReactiveFormsModule
    ],
  templateUrl: './user-settings.component.html',
  styleUrl: './user-settings.component.css'
})
export class UserSettingsComponent {
  form: FormGroup;
  errormsg: string = '';

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      city: ['',Validators.required],
      streat: ['',Validators.required],
      house: ['',Validators.required],
      houseAdd: ['',Validators.required]
    });
  }

  onSubmit($event: any) {
    if(!this.form.valid){
      this.errormsg = 'Invalid fields!';
    }
    else {
      this.errormsg = '';
    }
  }
}
