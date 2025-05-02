import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration-page',
    imports: [
        FormsModule,
        ReactiveFormsModule
    ],
  templateUrl: './registration-page.component.html',
  styleUrl: './registration-page.component.css'
})
export class RegistrationPageComponent {

  constructor(private router: Router) {

  }

  async goToLoginPage($event: MouseEvent) {
    await this.router.navigate(['/login']);
  }
}
