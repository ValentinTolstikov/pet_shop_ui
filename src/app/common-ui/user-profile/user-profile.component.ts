import {Component, OnInit} from '@angular/core';
import {UserServiceService} from '../../Data/Services/user-service.service';
import {MatDivider} from '@angular/material/divider';

@Component({
  selector: 'app-user-profile',
  imports: [
    MatDivider
  ],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements OnInit {
  constructor(private userService: UserServiceService) {
  }

  ngOnInit() {
      let userInfo = this.userService.getUserInfo();
  }
}
