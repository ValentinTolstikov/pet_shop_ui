import { Component } from '@angular/core';
import {CustomHeaderComponent} from '../../common-ui/custom-header/custom-header.component';

@Component({
  selector: 'app-error-page',
  imports: [
    CustomHeaderComponent
  ],
  templateUrl: './error-page.component.html',
  styleUrl: './error-page.component.css'
})
export class ErrorPageComponent {

}
