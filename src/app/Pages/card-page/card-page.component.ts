import {Component, OnDestroy} from '@angular/core';
import {CustomHeaderComponent} from '../../common-ui/custom-header/custom-header.component';
import {FooterComponent} from '../../common-ui/footer/footer.component';
import {MatCard} from '@angular/material/card';
import {ProductCartItemComponent} from '../../common-ui/product-cart-item/product-cart-item.component';
import {MatDivider} from '@angular/material/divider';
import {CartItem} from '../../Data/Interfaces/cart-item';
import {CartServiceService} from '../../Data/Services/cart-service.service';
import {ProductsServiceService} from '../../Data/Services/products-service.service';
import {ImageTogleButtonComponent} from '../../common-ui/image-togle-button/image-togle-button.component';
import {faCartPlus, faCartShopping, faCreditCard, faMoneyBill} from '@fortawesome/free-solid-svg-icons';
import {UserAddressComponent} from '../../common-ui/user-address/user-address.component';
import {UserAdressesResponse} from '../../Data/Interfaces/ApiResponses/userAdressesResponse';
import {UserServiceService} from '../../Data/Services/user-service.service';
import {OrdersServiceService} from '../../Data/Services/orders-service.service';
import {OrderProduct} from '../../Data/Interfaces/OrderProduct';

@Component({
  selector: 'app-card-page',
  imports: [
    CustomHeaderComponent,
    FooterComponent,
    MatCard,
    ProductCartItemComponent,
    MatDivider,
    ImageTogleButtonComponent,
    UserAddressComponent
  ],
  templateUrl: './card-page.component.html',
  styleUrl: './card-page.component.css'
})
export class CardPageComponent implements OnDestroy {
  selling_items: CartItem[] = [];

  CntItems: number = 0;
  ProductsPrice: number = 0;
  TotalPrice: number = 0;

  constructor(private cartService: CartServiceService, private userServ: UserServiceService, private ordersService: OrdersServiceService, private productService: ProductsServiceService) {
    this.loadData();
    this.userServ.getUserAdresses().subscribe(res => {
      this.adresses = res;
    })
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
          this.CalcCount();
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

      this.CalcCount();
      this.CalcTotal();
    }
  }

  private CalcCount() {
    this.CntItems = 0;
    this.selling_items.forEach((value) => {
      this.CntItems += value.count;
    })
  }

  protected readonly faCartShopping = faCartShopping;
  protected readonly faCartPlus = faCartPlus;
  protected readonly faCreditCard = faCreditCard;
  protected readonly faMoneyBill = faMoneyBill;

  isCard = false;

  ChangePayMethod($event: MouseEvent) {
    this.isCard = !this.isCard;
  }

  selectedIndex = 1;
  adresses: UserAdressesResponse[] = [];

  ChangeAddress($event: MouseEvent, index: number) {
    this.selectedIndex = index;
  }

  sale($event: MouseEvent) {
    let products: OrderProduct[] = [];

    this.selling_items.forEach((value, key) => {
      products.push({productId:(value.id as number),count:value.count as number})
    })

    this.ordersService.createOrder(products);
  }
}
