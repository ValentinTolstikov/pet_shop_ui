import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faCartShopping, faCat, faCircleUser, faCrow, faFishFins, faPaw} from '@fortawesome/free-solid-svg-icons';
import {faDog} from '@fortawesome/free-solid-svg-icons/faDog';

@Component({
  selector: 'app-custom-header',
    imports: [
        FaIconComponent
    ],
  templateUrl: './custom-header.component.html',
  styleUrl: './custom-header.component.css'
})
export class CustomHeaderComponent {

  protected readonly faCrow = faCrow;
  protected readonly faCartShopping = faCartShopping;
  protected readonly faCircleUser = faCircleUser;
  protected readonly faCat = faCat;
  protected readonly faPaw = faPaw;
  protected readonly faFishFins = faFishFins;
  protected readonly faDog = faDog;
  iconColor: string = 'gray';

  constructor(private router: Router) {
  }

  GoToMainPage($event: MouseEvent) {
    this.router.navigateByUrl('/');
  }

  GoToCart($event: MouseEvent) {
    this.router.navigateByUrl('/cart');
  }

  GoToProfile($event: MouseEvent) {
    this.router.navigateByUrl('/profile');
  }
}
