import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageTogleButtonComponent } from './image-togle-button.component';

describe('ImageTogleButtonComponent', () => {
  let component: ImageTogleButtonComponent;
  let fixture: ComponentFixture<ImageTogleButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageTogleButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageTogleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
