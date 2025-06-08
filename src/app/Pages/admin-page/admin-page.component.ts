import {Component} from '@angular/core';
import {MatTab, MatTabGroup} from '@angular/material/tabs';
import {StaticticsComponent} from '../../common-ui/statictics/statictics.component';
import {UsersComponent} from '../../common-ui/users/users.component';
import {Router} from '@angular/router';
import {AuthService} from '../../Data/Services/auth-service.service';

@Component({
  selector: 'app-admin-page',
  imports: [
    MatTab,
    MatTabGroup,
    StaticticsComponent,
    UsersComponent
  ],
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.css'
})
export class AdminPageComponent {

  constructor(private router: Router, private authService: AuthService) {
  }

  GoToMain() {
    this.router.navigate(['/']);
  }

  Logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
