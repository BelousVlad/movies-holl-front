import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesBannersSliderComponent } from './movies-banners-slider.component';

describe('MoviesBannersSliderComponent', () => {
  let component: MoviesBannersSliderComponent;
  let fixture: ComponentFixture<MoviesBannersSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesBannersSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesBannersSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
