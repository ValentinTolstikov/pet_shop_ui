import {Component, Input} from '@angular/core';
import {FaIconComponent, IconDefinition} from '@fortawesome/angular-fontawesome';
import {faDog} from '@fortawesome/free-solid-svg-icons/faDog';

@Component({
  selector: 'app-image-togle-button',
  imports: [
    FaIconComponent
  ],
  templateUrl: './image-togle-button.component.html',
  styleUrl: './image-togle-button.component.css'
})
export class ImageTogleButtonComponent {
  @Input()img: IconDefinition = faDog;
  @Input()isActive: boolean = false;
}
