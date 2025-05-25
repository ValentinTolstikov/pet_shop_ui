import {Component, OnInit} from '@angular/core';
import {UserServiceService} from '../../Data/Services/user-service.service';
import {MatDivider} from '@angular/material/divider';
import {UserInfoResponse} from '../../Data/Interfaces/ApiResponses/user-info-response';

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

  userInfo: UserInfoResponse|null = null;

  ngOnInit() {
       this.userService.getUserInfo().subscribe(ui=>{
         this.userInfo = ui;
       });
  }

  LoadPhoto($event: MouseEvent) {
    
  }
}
