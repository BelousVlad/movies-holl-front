import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreMoviesBannersSliderComponent } from './genre-movies-banners-slider.component';

describe('GenreMoviesBannersSliderComponent', () => {
  let component: GenreMoviesBannersSliderComponent;
  let fixture: ComponentFixture<GenreMoviesBannersSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenreMoviesBannersSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenreMoviesBannersSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
