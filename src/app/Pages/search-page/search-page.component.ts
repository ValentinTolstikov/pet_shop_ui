import {Component, Input} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CustomHeaderComponent} from '../../common-ui/custom-header/custom-header.component';
import {FooterComponent} from '../../common-ui/footer/footer.component';
import {SellingItemComponent} from '../../common-ui/selling-item/selling-item.component';
import {ProductsServiceService} from '../../Data/Services/products-service.service';
import {ProductResponse} from '../../Data/Interfaces/ApiResponses/product-response';

@Component({
  selector: 'app-search-page',
  imports: [
    CustomHeaderComponent,
    FooterComponent,
    SellingItemComponent
  ],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.css'
})
export class SearchPageComponent {
   @Input("member") member : string = "";

   products: ProductResponse[] = [];

   constructor (private router : Router, private fb : ActivatedRoute, private productService: ProductsServiceService) {
     fb.params.subscribe(params => {this.member = params["member"];});
     if (this.member == "")
       router.navigateByUrl('/error');

     productService.search(this.member).then(r => r.subscribe(product => this.products = product));
   }

  Search(value: string) {
     this.member = value;
     this.productService.search(this.member).then(r => r.subscribe(product => this.products = product));
  }
}
