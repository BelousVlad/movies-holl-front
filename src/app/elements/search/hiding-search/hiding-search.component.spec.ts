import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HidingSearchComponent } from './hiding-search.component';

describe('HidingSearchComponent', () => {
  let component: HidingSearchComponent;
  let fixture: ComponentFixture<HidingSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HidingSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HidingSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
