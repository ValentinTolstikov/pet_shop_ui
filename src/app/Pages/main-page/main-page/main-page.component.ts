import { Component } from '@angular/core';
import {ProductCardComponent} from '../../../common-ui/product-card/product-card.component';
import {category} from '../../../Data/Interfaces/category-card.interface';
import {SellingItemComponent} from '../../../common-ui/selling-item/selling-item.component';
import {selling_item} from '../../../Data/Interfaces/selling-item.interface';
import {CardServiceService} from '../../../Data/Services/card-service.service';
import {faCartShopping, faCat, faCircleUser, faCrow, faFishFins, faPaw} from '@fortawesome/free-solid-svg-icons';
import {CustomHeaderComponent} from '../../../common-ui/custom-header/custom-header.component';
import {FooterComponent} from '../../../common-ui/footer/footer.component';
import {ProductsServiceService} from '../../../Data/Services/products-service.service';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-main-page',
  imports: [
    ProductCardComponent,
    SellingItemComponent,
    CustomHeaderComponent,
    FooterComponent,
    NgOptimizedImage
  ],
  providers: [CardServiceService],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

  get Categories(): category[] {
    return this._Categories;
  }

  set Categories(value: category[]) {
    this._Categories = value;
  }

  private _Categories: category[] = [
    {id: 1, name: 'Для котов', image: 'forcats.jpg', route: "cats"},
    {id: 2, name: 'Для собак', image: 'fordogs.jpg', route: "dogs"},
    {id: 3, name: 'Для маленьких животных', image: 'forsmallpets.jpg', route: "smallpets"},
    {id: 4, name: 'Для рыбок', image: 'forfishs.jpg', route: "fishs"}
  ];

  public TopSellingItems: selling_item[] = [
  ];

  constructor(private productService: ProductsServiceService) {
    this.LoadProducts();
  }

  private async LoadProducts(): Promise<void> {
    let prods = await this.productService.getAllProducts();
    prods.subscribe(products => {
      products.forEach(product => {
        let newProd: selling_item = {id:product.id, name:product.title, image:"/Assets/Imgs/forcats.jpg", price: product.price, description:product.description};
        this.TopSellingItems.push(newProd);
      })
    })
  }

  protected readonly String = String;
  protected readonly faCircleUser = faCircleUser;
  protected readonly faCartShopping = faCartShopping;
  protected readonly faCrow = faCrow;
  protected readonly faFishFins = faFishFins;
  protected readonly faCat = faCat;
  protected readonly faPaw = faPaw;
}
