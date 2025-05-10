import { Component } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router} from '@angular/router';
import {AuthService} from '../../Data/Services/auth-service.service';

@Component({
  selector: 'app-registration-page',
    imports: [
        FormsModule,
        ReactiveFormsModule
    ],
  templateUrl: './registration-page.component.html',
  styleUrl: './registration-page.component.css'
})
export class RegistrationPageComponent {
  form:FormGroup;

  constructor(private router: Router, private authService: AuthService, private fb:FormBuilder) {
    this.form = this.fb.group({
      username: ['',Validators.required],
      password: ['',Validators.required],
      email: ['',Validators.required, Validators.email],
      dateBorn: ['',Validators.required],
    });
  }

  async goToLoginPage($event: MouseEvent) {
    await this.router.navigate(['/login']);
  }

  async Register(event: MouseEvent) {

  }

  async upload($event: any) {
    const fValue = this.form.value;
    try{
      let response = await this.authService.Register(fValue.username, fValue.password, fValue.email, fValue.dateBorn);

      response.subscribe(async res => {
        if(res){
          await this.authService.Auth(fValue.username, fValue.password);
          await this.router.navigate(['/']);
        }
        else {
          await this.router.navigate(['/register']);
        }
      })
    }
    catch(error) {
      console.log(error);
    }
  }
}
