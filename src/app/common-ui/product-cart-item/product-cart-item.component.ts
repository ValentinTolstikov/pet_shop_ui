import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons/faTrashAlt';
import {ProductsServiceService} from '../../Data/Services/products-service.service';
import {ProductsImageService} from '../../Data/Services/products-image.service';
import {CartServiceService} from '../../Data/Services/cart-service.service';
import {CartItem} from '../../Data/Interfaces/cart-item';

@Component({
  selector: 'app-product-cart-item',
  imports: [
    FaIconComponent
  ],
  templateUrl: './product-cart-item.component.html',
  styleUrl: './product-cart-item.component.css'
})
export class ProductCartItemComponent implements OnInit {
  protected readonly faTrashAlt = faTrashAlt;

  productImage: string = "";
  prodName: string = "";
  prodPrice: number = 0;

  private countInStock: number = 0;


  @Input("Id") id: number = -1;
  @Input("ProdCnt") prodCnt: number = 0;

  constructor(private productService: ProductsServiceService, private imgService: ProductsImageService, private cartService: CartServiceService) {
  }

  ngOnInit() {
    this.productService.getProductById(this.id).then((product) => {
      product.subscribe(product => {
        this.prodName = product.title;
        this.prodPrice = product.price;
        this.countInStock = product.countInStock;

        this.imgService.GetProductImages(product.id).then((images) => {
          images.subscribe(image => {
            image.forEach((image) => {
              this.productImage = image.data;
            })
          })
        })
      })
    });
  }

  ReduceCnt($event: MouseEvent) {
    if(this.prodCnt > 1)
    {
      this.prodCnt -= 1;
      this.cartService.AddProductToCart(this.id, this.prodCnt);
      this.messageChange.emit(new CartItem(this.id, this.prodCnt));
    }
  }

  AddCnt($event: MouseEvent) {
    if(this.prodCnt < this.countInStock)
    {
      this.prodCnt += 1;
      this.cartService.AddProductToCart(this.id, this.prodCnt);
      this.messageChange.emit(new CartItem(this.id, this.prodCnt));
    }
  }

  @Output() messageEvent = new EventEmitter<number>();
  @Output() messageChange = new EventEmitter<CartItem>();

  DeleteItem($event: MouseEvent) {
    this.cartService.DeleteFromCart(this.id);
    this.messageEvent.emit(this.id);
  }
}
