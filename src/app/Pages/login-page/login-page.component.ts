import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {AuthService} from '../../Data/Services/auth-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  form:FormGroup;

  constructor(private authService: AuthService,
              private fb:FormBuilder,
              private router: Router,) {
    this.form = this.fb.group({
      username: ['',Validators.required],
      password: ['',Validators.required]
    });
  }

  async onSubmit(Event: Event) {
    console.log(Event);
    const val = this.form.value;

    if(val.username && val.password){
      const res = await this.authService.Auth(val.username, val.password);
      if(res)
      {
        await this.router.navigateByUrl('/');
      }
    }
  }

  async registerRequired($event: MouseEvent) {
    await this.router.navigateByUrl('/register');
  }
}
