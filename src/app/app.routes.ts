import { Routes } from '@angular/router';
import {LoginPageComponent} from './Pages/login-page/login-page.component';
import {AppComponent} from './app.component';
import {RegistrationPageComponent} from './Pages/registration-page/registration-page.component';
import {MainPageComponent} from './Pages/main-page/main-page/main-page.component';

export const routes: Routes = [
  { path: "login", component: LoginPageComponent},
  { path: "register", component: RegistrationPageComponent},
  { path: "", component: MainPageComponent},
  { path: "category", component: MainPageComponent},
];
