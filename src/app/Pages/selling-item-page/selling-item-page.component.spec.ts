import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellingItemPageComponent } from './selling-item-page.component';

describe('SellingItemPageComponent', () => {
  let component: SellingItemPageComponent;
  let fixture: ComponentFixture<SellingItemPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellingItemPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellingItemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
