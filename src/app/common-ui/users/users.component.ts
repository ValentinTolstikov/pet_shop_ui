import { Component } from '@angular/core';
import {MatCheckbox} from '@angular/material/checkbox';

@Component({
  selector: 'app-users',
  imports: [
    MatCheckbox
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  public SearchText: string = '';

  SortUsers($event: Event) {

  }
}
