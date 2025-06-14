import {Routes} from '@angular/router';
import {LoginPageComponent} from './Pages/login-page/login-page.component';
import {RegistrationPageComponent} from './Pages/registration-page/registration-page.component';
import {MainPageComponent} from './Pages/main-page/main-page/main-page.component';
import {adminGuard, loginGuard} from './about.guard';
import {CategoryPageComponent} from './Pages/category-page/category-page.component';
import {SellingItemPageComponent} from './Pages/selling-item-page/selling-item-page.component';
import {ErrorPageComponent} from './Pages/error-page/error-page.component';
import {SearchPageComponent} from './Pages/search-page/search-page.component';
import {CardPageComponent} from './Pages/card-page/card-page.component';
import {ProfilePageComponent} from './Pages/profile-page/profile-page.component';
import {AdminPageComponent} from './Pages/admin-page/admin-page.component';

export const routes: Routes = [
  { path: "login", component: LoginPageComponent },
  { path: "register", component: RegistrationPageComponent },
  { path: "", component: MainPageComponent, canActivate: [loginGuard] },
  { path: "category/:name", component: CategoryPageComponent, canActivate: [loginGuard] },
  { path: "items/:id", component: SellingItemPageComponent, canActivate: [loginGuard] },
  { path: "search/:member", component: SearchPageComponent, canActivate: [loginGuard] },
  { path: "error", component: ErrorPageComponent, canActivate: [loginGuard] },
  { path: "profile", component: ProfilePageComponent, canActivate: [loginGuard] },
  { path: "cart", component: CardPageComponent, canActivate: [loginGuard] },
  { path: "admin", component: AdminPageComponent, canActivate: [adminGuard] },
];
