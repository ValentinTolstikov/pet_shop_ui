import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {CustomHeaderComponent} from '../../common-ui/custom-header/custom-header.component';
import {FooterComponent} from '../../common-ui/footer/footer.component';
import {NgbCarousel, NgbSlide} from '@ng-bootstrap/ng-bootstrap';
import {MatButton, MatIconButton} from '@angular/material/button';
import {ProductsServiceService} from '../../Data/Services/products-service.service';
import {ProductsImageService} from '../../Data/Services/products-image.service';
import {MatIcon} from '@angular/material/icon';
import {SellingItemComponent} from '../../common-ui/selling-item/selling-item.component';
import {selling_item} from '../../Data/Interfaces/selling-item.interface';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-selling-item-page',
  imports: [
    CustomHeaderComponent,
    FooterComponent,
    NgbCarousel,
    NgbSlide,
    MatButton,
    MatIcon,
    SellingItemComponent
  ],
  templateUrl: './selling-item-page.component.html',
  styleUrl: './selling-item-page.component.css'
})
export class SellingItemPageComponent implements OnInit, OnChanges {
  @Input("Id") Id : number = -1;
  TopSellingItems: selling_item[] = [];

  SelectedCount: number = 1;

  Title : string = '';
  Price : number = 0.0;
  Description : string = '';
  CountInStock : number = 0;

  protected Photos: string[] = [];

  ngOnInit(): void {
    this.itemService.getAllProducts().then(p=>p.subscribe(p=>p.forEach(pr=>{
      let test = new selling_item(pr.id,'',pr.description,pr.price,pr.title);
      this.TopSellingItems.push(test);
    })))
  }

  ngOnChanges(): void {
  }

  constructor(private router: Router, private fb : ActivatedRoute, private itemService: ProductsServiceService,
              private imgService: ProductsImageService) {
    fb.params.subscribe(params => {
      this.Id = params["id"];
      this.LoadImgs();
      this.LoadData();
    });
    if (this.Id == -1) {
      router.navigateByUrl('/error');
    }
  }

  LoadData(){
    this.itemService.getProductById(this.Id).then((product) => {
      product.subscribe(product => {
        this.Title = product.title;
        this.Price = product.price;
        this.Description = product.description;
        this.CountInStock = product.countInStock;
      })
    });
  }

  LoadImgs() {
    this.Photos = [];
    this.imgService.GetProductImages(this.Id).then((images) => {
      images.subscribe(image => {
        image.forEach(image => {
          this.Photos.push(image.data);
        })
      })
    })
  }

  ReduceCnt($event: MouseEvent) {
    this.SelectedCount -= 1;
  }

  AddCnt($event: MouseEvent) {
    this.SelectedCount += 1;
  }
}

