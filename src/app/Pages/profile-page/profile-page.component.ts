import {Component, OnInit} from '@angular/core';
import {MatTab, MatTabGroup, MatTabLabel} from '@angular/material/tabs';
import {MatCard} from '@angular/material/card';
import {MatDivider} from '@angular/material/divider';
import {CustomHeaderComponent} from '../../common-ui/custom-header/custom-header.component';
import {FooterComponent} from '../../common-ui/footer/footer.component';
import {AuthService} from '../../Data/Services/auth-service.service';
import {Router} from '@angular/router';
import {UserProfileComponent} from '../../common-ui/user-profile/user-profile.component';
import {UserOrdersComponent} from '../../common-ui/user-orders/user-orders.component';
import {UserAddressesComponent} from '../../common-ui/user-addresses/user-addresses.component';
import {UserSettingsComponent} from '../../common-ui/user-settings/user-settings.component';
import {UserServiceService} from '../../Data/Services/user-service.service';

@Component({
  selector: 'app-profile-page',
  imports: [
    MatTab,
    MatTabGroup,
    MatCard,
    CustomHeaderComponent,
    FooterComponent,
    UserProfileComponent,
    UserOrdersComponent,
    UserAddressesComponent,
    UserSettingsComponent
  ],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css'
})
export class ProfilePageComponent implements OnInit {
  Username: string = '';
  Email: string = '';
  Photo: string = '';
  IsAdmin: boolean = false;

  constructor(private authService: AuthService, private router: Router, private userService: UserServiceService) {
  }

  ngOnInit() {
    this.userService.getUserInfo().subscribe(userInfo => {
      this.Username = userInfo.username;
      this.Email = userInfo.email;
      this.Photo = userInfo.photo;
    });

    this.IsAdmin = this.authService.isAdmin();
  }

  Logout($event: MouseEvent) {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  GoToAdminPg($event: MouseEvent) {
    this.router.navigate(['/admin']);
  }
}
