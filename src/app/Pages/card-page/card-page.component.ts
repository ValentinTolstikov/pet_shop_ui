import {Component, OnDestroy} from '@angular/core';
import {CustomHeaderComponent} from '../../common-ui/custom-header/custom-header.component';
import {FooterComponent} from '../../common-ui/footer/footer.component';
import {MatCard} from '@angular/material/card';
import {ProductCartItemComponent} from '../../common-ui/product-cart-item/product-cart-item.component';
import {MatDivider} from '@angular/material/divider';
import {CartItem} from '../../Data/Interfaces/cart-item';
import {CartServiceService} from '../../Data/Services/cart-service.service';
import {ProductsServiceService} from '../../Data/Services/products-service.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-card-page',
  imports: [
    CustomHeaderComponent,
    FooterComponent,
    MatCard,
    ProductCartItemComponent,
    MatDivider
  ],
  templateUrl: './card-page.component.html',
  styleUrl: './card-page.component.css'
})
export class CardPageComponent implements OnDestroy {
  selling_items: CartItem[] = [];

  CntItems: number = 0;
  ProductsPrice: number = 0;
  TotalPrice: number = 0;

  constructor(private cartService: CartServiceService, private productService: ProductsServiceService) {
    this.loadData();
  }

  ngOnDestroy() {
  }

  handleMessage(msg: number) {
    let index = this.selling_items.findIndex(value => {
      return value.id == msg;
    })

    this.selling_items.splice(index, 1);
    this.loadData();
  }

  private async loadData(): Promise<void> {
    this.selling_items = [];
    this.CntItems = 0;
    this.ProductsPrice = 0;
    this.TotalPrice = 0;

    let itemsFromCart = this.cartService.GetCartItems();

    itemsFromCart.forEach((value, key) => {
      let selItem = new CartItem(key, value);
      this.selling_items.push(selItem);

      let res = this.productService.getProductById(selItem.id).then((product) => {
        product.subscribe((data) => {
          this.ProductsPrice += (data.price * value)
          selItem.price = data.price;
        }).add(()=>{
          this.CalcTotal();
          this.selling_items.forEach((value) => {
            this.CntItems += value.count;
          })
        })
      });
    });
  }

  private CalcTotal() {
    this.TotalPrice = this.ProductsPrice + 50;
  }

  handleChange($event: CartItem) {
    let itemIndex = this.selling_items.findIndex(value => {
      return value.id == $event.id;
    })

    let element = this.selling_items.at(itemIndex);

    if(element !== undefined) {
      this.ProductsPrice -= element.price * element.count;
      let delta = element.count - $event.count;

      element.count = $event.count;

      this.ProductsPrice += element.price * element.count;

      this.CntItems-=delta;

      this.CalcTotal();
    }
  }
}
