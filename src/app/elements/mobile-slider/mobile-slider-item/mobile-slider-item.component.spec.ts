import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileSliderItemComponent } from './mobile-slider-item.component';

describe('MobileSliderItemComponent', () => {
  let component: MobileSliderItemComponent;
  let fixture: ComponentFixture<MobileSliderItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileSliderItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileSliderItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
