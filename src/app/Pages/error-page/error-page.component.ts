import { Component } from '@angular/core';
import {CustomHeaderComponent} from '../../common-ui/custom-header/custom-header.component';
import {FooterComponent} from '../../common-ui/footer/footer.component';

@Component({
  selector: 'app-error-page',
  imports: [
    CustomHeaderComponent,
    FooterComponent
  ],
  templateUrl: './error-page.component.html',
  styleUrl: './error-page.component.css'
})
export class ErrorPageComponent {

}
