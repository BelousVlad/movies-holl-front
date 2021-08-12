import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonusesSliderComponent } from './bonuses-slider.component';

describe('BonusesSliderComponent', () => {
  let component: BonusesSliderComponent;
  let fixture: ComponentFixture<BonusesSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BonusesSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BonusesSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
