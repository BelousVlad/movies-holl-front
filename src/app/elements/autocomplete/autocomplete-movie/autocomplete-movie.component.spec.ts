import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteMovieComponent } from './autocomplete-movie.component';

describe('AutocompleteMovieComponent', () => {
  let component: AutocompleteMovieComponent;
  let fixture: ComponentFixture<AutocompleteMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutocompleteMovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleteMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
