import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {CartServiceService} from './Data/Services/cart-service.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'Маленькие радости';

  constructor(private service: CartServiceService) {
    this.service.TryLoadFromLocalStorage();
  }
}
