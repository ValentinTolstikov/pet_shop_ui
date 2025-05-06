import {Component, Input, OnInit} from '@angular/core';
import {category} from '../../Data/Interfaces/category-card.interface';
import {Router} from '@angular/router';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-product-card',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})

export class ProductCardComponent implements OnInit {
  @Input("Category") Category: category|null = null;
  path = '/Assets/Imgs/';

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    if (this.Category != null)
    {
      this.Category.image = this.path + this.Category.image;
    }
  }

  GotoCategory($event: MouseEvent) {
    this.router.navigateByUrl('/category/'+ this.Category?.route);
  }
}
