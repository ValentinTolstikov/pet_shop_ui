import {Component, Input, OnInit} from '@angular/core';
import {category} from '../../Data/Interfaces/category-card.interface';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})

export class ProductCardComponent implements OnInit {
  @Input("Category") Category: category|null = null;
  path = '/Assets/Imgs/';

  ngOnInit(): void {
    if (this.Category != null)
    {
      this.Category.image = this.path + this.Category.image;
    }
  }
}
