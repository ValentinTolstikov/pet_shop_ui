import { Component } from '@angular/core';
import {ProductCardComponent} from '../../../common-ui/product-card/product-card.component';
import {category} from '../../../Data/Interfaces/category-card.interface';
import {SellingItemComponent} from '../../../common-ui/selling-item/selling-item.component';
import {selling_item} from '../../../Data/Interfaces/selling-item.interface';
import {CardServiceService} from '../../../Data/Services/card-service.service';
import {faCartShopping, faCat, faCircleUser, faCrow, faFishFins, faPaw} from '@fortawesome/free-solid-svg-icons';
import {CustomHeaderComponent} from '../../../common-ui/custom-header/custom-header.component';
import {FooterComponent} from '../../../common-ui/footer/footer.component';

@Component({
  selector: 'app-main-page',
  imports: [
    ProductCardComponent,
    SellingItemComponent,
    CustomHeaderComponent,
    FooterComponent
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
    {id: 1, name: 'Cats', image: 'forcats.jpg'},
    {id: 2, name: 'Dogs', image: 'fordogs.jpg'},
    {id: 3, name: 'Small pets', image: 'forsmallpets.jpg'},
    {id: 4, name: 'Fishes', image: 'forfishs.jpg'}
  ];

  public TopSellingItems: selling_item[] = [
    {id:1, name:"test", image:"/Assets/Imgs/forcats.jpg", price: 100.0, description:'длинное описание какогото продукта в 3 строки и все такое, нужно для теста'},
    {id:2, name:"test2", image:"/Assets/Imgs/fordogs.jpg", price: 150.0, description:'длинное описание какогото продукта в 3 строки и все такое, нужно для теста'},
    {id:3, name:"test3", image:"/Assets/Imgs/forcats.jpg", price: 120.0, description:'длинное описание какогото продукта в 3 строки и все такое, нужно для теста'},
    {id:4, name:"test4", image:"/Assets/Imgs/forcats.jpg", price: 150.0, description:'длинное описание какогото продукта в 3 строки и все такое, нужно для теста'},
    {id:5, name:"test", image:"/Assets/Imgs/forcats.jpg", price: 100.0, description:'длинное описание какогото продукта в 3 строки и все такое, нужно для теста'},
    {id:6, name:"test2", image:"/Assets/Imgs/fordogs.jpg", price: 150.0, description:'длинное описание какогото продукта в 3 строки и все такое, нужно для теста'},
    {id:7, name:"test3", image:"/Assets/Imgs/forcats.jpg", price: 120.0, description:'длинное описание какогото продукта в 3 строки и все такое, нужно для теста'},
    {id:8, name:"test4", image:"/Assets/Imgs/forcats.jpg", price: 150.0, description:'длинное описание какогото продукта в 3 строки и все такое, нужно для теста'},
  ];

  constructor(){}

  protected readonly String = String;
  protected readonly faCircleUser = faCircleUser;
  protected readonly faCartShopping = faCartShopping;
  protected readonly faCrow = faCrow;
  protected readonly faFishFins = faFishFins;
  protected readonly faCat = faCat;
  protected readonly faPaw = faPaw;
}
