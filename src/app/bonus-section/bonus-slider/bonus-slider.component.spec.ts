import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonusSliderComponent } from './bonus-slider.component';

describe('BonusSliderComponent', () => {
  let component: BonusSliderComponent;
  let fixture: ComponentFixture<BonusSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BonusSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BonusSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
