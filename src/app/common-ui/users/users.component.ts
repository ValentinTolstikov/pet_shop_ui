import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatCheckbox} from '@angular/material/checkbox';
import {AdminService} from '../../Data/Services/admin.service';
import {UserResponse} from '../../Data/Interfaces/ApiResponses/UserResponse';

@Component({
  selector: 'app-users',
  imports: [
    MatCheckbox
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  users: UserResponse[] = [];
  usersBase: UserResponse[] = [];
  searchText: string = '';
  @ViewChild("searchInput") searchInput: Input | any;
  @ViewChild("cbChanged") cbChanged: MatCheckbox | any;

  constructor(private admService: AdminService) {

  }

  ngOnInit() {
    this.updateUsers();
  }

  private updateUsers() {
    this.admService.getUsers().then((response) => {
      response.subscribe(u=>{
        this.usersBase = u;
        this.users = u;
      })
    });
  }

  SortUsers($event: Event) {
    if(this.searchInput.nativeElement.value!=''){
      let results = this.usersBase.filter(p=>p.username.toLowerCase().includes(this.searchInput.nativeElement.value.toLowerCase()));
      this.users = results;
    }
    else {
      this.users = this.usersBase;
    }
  }

  async Change(username: string) {
    await this.admService.changeUserStatus(username, !this.cbChanged.checked);
  }
}
