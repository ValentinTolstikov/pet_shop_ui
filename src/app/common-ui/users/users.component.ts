import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatCheckbox, MatCheckboxChange} from '@angular/material/checkbox';
import {AdminService} from '../../Data/Services/admin.service';
import {UserResponse} from '../../Data/Interfaces/ApiResponses/UserResponse';
import {LoaderComponent} from '../loader/loader.component';

@Component({
  selector: 'app-users',
  imports: [
    MatCheckbox,
    LoaderComponent
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
  LoaderVisible: boolean = false;

  constructor(private admService: AdminService) {

  }

  ngOnInit() {
    this.updateUsers();
  }

  private updateUsers() {
    this.LoaderVisible = true;
    this.admService.getUsers().then((response) => {
      response.subscribe(u=>{
        this.usersBase = u;
        this.users = u;
      }).add(()=>{
        this.LoaderVisible = false;
      })
    }).catch((error) => {
      console.log(error);
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

  async Change(username: string, $event: MatCheckboxChange) {
    await this.admService.changeUserStatus(username, $event.checked);
  }
}
