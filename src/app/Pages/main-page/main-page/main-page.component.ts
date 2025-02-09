import { Component } from '@angular/core';
import {ProductCardComponent} from '../../../common-ui/product-card/product-card.component';
import {category} from '../../../Data/Interfaces/category-card.interface';
import {SellingItemComponent} from '../../../common-ui/selling-item/selling-item.component';

@Component({
  selector: 'app-main-page',
  imports: [
    ProductCardComponent,
    SellingItemComponent
  ],
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

  private _Categories: category[];

  constructor() {
    this._Categories = [];
    this._Categories.push({id: 1, name: 'Cats', image: 'forcats.png'})
    this._Categories.push({id: 1, name: 'Dogs', image: 'fordogs.png'})
    this._Categories.push({id: 1, name: 'Small pets', image: 'forsmallpets.png'})
    this._Categories.push({id: 1, name: 'Fishes', image: 'forfishs.png'})
  }

  protected readonly String = String;
}
