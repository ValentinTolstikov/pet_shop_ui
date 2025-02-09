import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellingItemComponent } from './selling-item.component';

describe('SellingItemComponent', () => {
  let component: SellingItemComponent;
  let fixture: ComponentFixture<SellingItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellingItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellingItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
