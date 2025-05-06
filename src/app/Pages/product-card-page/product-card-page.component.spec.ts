import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardPageComponent } from './product-card-page.component';

describe('ProductCardPageComponent', () => {
  let component: ProductCardPageComponent;
  let fixture: ComponentFixture<ProductCardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCardPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
