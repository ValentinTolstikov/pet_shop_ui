import {Component} from '@angular/core';
import {faCartShopping, faCat, faCircleUser, faCrow, faFishFins, faPaw} from '@fortawesome/free-solid-svg-icons';
import {SellingItemComponent} from '../../common-ui/selling-item/selling-item.component';
import {CustomHeaderComponent} from '../../common-ui/custom-header/custom-header.component';
import {FooterComponent} from '../../common-ui/footer/footer.component';
import {selling_item} from '../../Data/Interfaces/selling-item.interface';
import {ProductsServiceService} from '../../Data/Services/products-service.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-category-page',
  imports: [
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

  private category_base_name = '';

  public SellingItems: selling_item[] = [];

  private async LoadProducts(): Promise<void> {
    let prods = await this.productService.getAllProducts(this.category_base_name);
    prods.subscribe(products => {
      products.forEach(product => {
        let newProd: selling_item = {id:product.id, name:product.title, image:"/Assets/Imgs/forcats.jpg", price: product.price, description:product.description};
        this.SellingItems.push(newProd);
      })
    })
  }

  constructor(private productService: ProductsServiceService, private curRouter: ActivatedRoute, private router: Router) {
    curRouter.params.subscribe(params => {
      let name: string = params["name"];

      if(name === null || name === ""){
        router.navigateByUrl("/error");
      }

      this.category_base_name = name;
      this.ResolveName(name);
    });
    this.LoadProducts();
  }

  public CategoryName: string = 'Коты';

  private ResolveName(name: string) {
    let ctName = '';
    switch (name) {
      case 'fishs':
        ctName = 'для рыбок';
        break;

      case 'dogs':
        ctName = 'для собак';
        break;

      case 'smallpets':
        ctName = 'для для маленьких животных';
        break;

      case 'cats':
        ctName = 'для котов';
        break;
    }

    this.CategoryName = ctName;
  }
}
