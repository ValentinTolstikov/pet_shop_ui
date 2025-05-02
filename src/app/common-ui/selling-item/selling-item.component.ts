import {Component, Input} from '@angular/core';
import {CardServiceService} from '../../Data/Services/card-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-selling-item',
  imports: [
  ],
  templateUrl: './selling-item.component.html',
  styleUrl: './selling-item.component.css'
})
export class SellingItemComponent {

  constructor(private cardService: CardServiceService,private router: Router) { }

  @Input("Id") Id: number = -1;
  @Input("Name") Name : string = 'test';
  @Input("Description") Description : string = 'test';
  @Input("Price") Price : number = 100.0;
  @Input("Image") Image : string | null = '';
  public AddedToCart: boolean = false;

  public GoToItem(): void {
    this.router.navigateByUrl('/items/'+this.Id);
  }

  public Click(event : SellingItemComponent):void
  {
    event.AddedToCart = !event.AddedToCart;
    try {
      var array = this.cardService.getCards();
      array.forEach(card => {
        console.log(card);
      })
    }
    catch(error) {
      console.error(error);
    }
  }
}
