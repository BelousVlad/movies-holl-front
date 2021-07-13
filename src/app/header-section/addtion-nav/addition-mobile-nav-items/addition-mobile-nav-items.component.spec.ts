import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionMobileNavItemsComponent } from './addition-mobile-nav-items.component';

describe('AdditionMobileNavItemsComponent', () => {
  let component: AdditionMobileNavItemsComponent;
  let fixture: ComponentFixture<AdditionMobileNavItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditionMobileNavItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionMobileNavItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
