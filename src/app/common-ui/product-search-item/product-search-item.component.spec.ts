import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSearchItemComponent } from './product-search-item.component';

describe('ProductSearchItemComponent', () => {
  let component: ProductSearchItemComponent;
  let fixture: ComponentFixture<ProductSearchItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductSearchItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductSearchItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
