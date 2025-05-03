import {Component, Input} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CustomHeaderComponent} from '../../common-ui/custom-header/custom-header.component';
import {FooterComponent} from '../../common-ui/footer/footer.component';
import {NgbCarousel, NgbSlide} from '@ng-bootstrap/ng-bootstrap';
import {MatButton} from '@angular/material/button';
import {ProductsServiceService} from '../../Data/Services/products-service.service';
import {ProductsImageService} from '../../Data/Services/products-image.service';

@Component({
  selector: 'app-selling-item-page',
  imports: [
    CustomHeaderComponent,
    FooterComponent,
    NgbCarousel,
    NgbSlide,
    MatButton
  ],
  templateUrl: './selling-item-page.component.html',
  styleUrl: './selling-item-page.component.css'
})
export class SellingItemPageComponent {
  @Input("Id") Id : number = -1;

  Title : string = '';
  Price : number = 0.0;
  Description : string = '';
  CountInStock : number = 0;

  protected Photos: string[] = [];

  constructor(router: Router, private fb : ActivatedRoute, private itemService: ProductsServiceService,
              private imgService: ProductsImageService) {
    fb.params.subscribe(params => {this.Id = params["id"];});
    if (this.Id == -1) {
      router.navigateByUrl('/error');
    }

    itemService.getProductById(this.Id).then((product) => {
      product.subscribe(product => {
        this.Title = product.title;
        this.Price = product.price;
        this.Description = product.description;
        this.CountInStock = product.countInStock;
      })
    });

    imgService.GetProductImages(this.Id).then((images) => {
      images.subscribe(image => {
        image.forEach(image => {
          this.Photos.push(image.data);
        })
      })
    })
  }
}
