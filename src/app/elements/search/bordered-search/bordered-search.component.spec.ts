import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorderedSearchComponent } from './bordered-search.component';

describe('BorderedSearchComponent', () => {
  let component: BorderedSearchComponent;
  let fixture: ComponentFixture<BorderedSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorderedSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorderedSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
