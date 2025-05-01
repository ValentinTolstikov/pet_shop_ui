import {Component, Input} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CustomHeaderComponent} from '../../common-ui/custom-header/custom-header.component';
import {FooterComponent} from '../../common-ui/footer/footer.component';
import {NgbCarousel, NgbSlide} from '@ng-bootstrap/ng-bootstrap';
import {MatCard} from '@angular/material/card';
import {MatButtonToggle} from '@angular/material/button-toggle';
import {MatButton, MatIconButton} from '@angular/material/button';

@Component({
  selector: 'app-selling-item-page',
  imports: [
    CustomHeaderComponent,
    FooterComponent,
    NgbCarousel,
    NgbSlide,
    MatButtonToggle,
    MatButton,
    MatIconButton
  ],
  templateUrl: './selling-item-page.component.html',
  styleUrl: './selling-item-page.component.css'
})
export class SellingItemPageComponent {
  @Input("Id") Id : number = -1;

  constructor(router: Router, private fb : ActivatedRoute) {
    fb.params.subscribe(params => {this.Id = params["id"];});
    if (this.Id == -1) {
      router.navigateByUrl('/error');
    }
  }
}
