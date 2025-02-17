import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ProductCardComponent} from './common-ui/product-card/product-card.component';
import {LoginPageComponent} from './Pages/login-page/login-page.component';
import {RegistrationPageComponent} from './Pages/registration-page/registration-page.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductCardComponent, LoginPageComponent, RegistrationPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test-poject';
}
