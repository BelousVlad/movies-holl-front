import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotMoviesComponent } from './not-movies.component';

describe('NotMoviesComponent', () => {
  let component: NotMoviesComponent;
  let fixture: ComponentFixture<NotMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotMoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
