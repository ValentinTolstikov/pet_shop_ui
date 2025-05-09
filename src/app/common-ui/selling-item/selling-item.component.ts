import {AfterViewInit, Component, Input} from '@angular/core';
import {Router} from '@angular/router';
import {ProductsImageService} from '../../Data/Services/products-image.service';
import {CartServiceService} from '../../Data/Services/cart-service.service';

@Component({
  selector: 'app-selling-item',
  imports: [
  ],
  templateUrl: './selling-item.component.html',
  styleUrl: './selling-item.component.css'
})
export class SellingItemComponent implements AfterViewInit {

  constructor(private router: Router,private imgService: ProductsImageService, private cartService: CartServiceService) {
  }

  ngAfterViewInit() {
    this.LoadImg();
    this.AddedToCart = this.cartService.IsAddedToCart(this.Id);
  }

  public LoadImg() {
    this.imgService.GetProductImages(this.Id).then(r => r.subscribe(n=>
      {
        let data = n.at(0);
        if(data != undefined){
          this.Image = data.data;
        }
      }
    ));
  }

  @Input("Id") Id: number = -1;
  @Input("Name") Name : string = 'test';
  @Input("Description") Description : string = 'test';
  @Input("Price") Price : number = 100.0;
  @Input("Image") Image : string | null = '';
  public AddedToCart: boolean = false;

  public GoToItem(): void {
    this.router.navigateByUrl('/items/'+this.Id);
  }

  public Click(event : MouseEvent):void
  {
    try {
      //var array = this.cardService.getCards();
      if(!this.AddedToCart){
        this.cartService.AddProductToCart(this.Id, 1);
      }
      else {
        this.cartService.DeleteFromCart(this.Id);
      }
      this.AddedToCart = !this.AddedToCart;
    }
    catch(error) {
      console.error(error);
    }
  }
}
