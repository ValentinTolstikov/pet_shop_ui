import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from "@angular/router";
import {inject} from '@angular/core';
import {AuthService} from './Data/Services/auth-service.service';

export const loginGuard = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  var test = localStorage.getItem("token")// можно получить различную информацию о маршрутах, параметрах и ит.д.

  const result = authService.isLoggedIn();

  if(!result){
    router.navigate(['/login']);
  }

  return result;
};

export const adminGuard = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const result = authService.isAdmin();

  if(!result){
    router.navigate(['/login']);
  }

  return result;
};
