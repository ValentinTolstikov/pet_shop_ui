import {Component, Query} from '@angular/core';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';
import {faCartShopping, faCat, faCircleUser, faCrow, faFishFins, faPaw} from '@fortawesome/free-solid-svg-icons';
import {ProductSearchItemComponent} from '../../common-ui/product-search-item/product-search-item.component';
import {SellingItemComponent} from '../../common-ui/selling-item/selling-item.component';
import {CustomHeaderComponent} from '../../common-ui/custom-header/custom-header.component';
import {FooterComponent} from '../../common-ui/footer/footer.component';

@Component({
  selector: 'app-category-page',
  imports: [
    FaIconComponent,
    ProductSearchItemComponent,
    SellingItemComponent,
    CustomHeaderComponent,
    FooterComponent
  ],
  templateUrl: './category-page.component.html',
  styleUrl: './category-page.component.css'
})
export class CategoryPageComponent {
  protected readonly faCartShopping = faCartShopping;
  protected readonly faCircleUser = faCircleUser;
  protected readonly faCrow = faCrow;
  protected readonly faCat = faCat;
  protected readonly faPaw = faPaw;
  protected readonly faFishFins = faFishFins;

  public CategoryName: string = 'Коты';
}
