import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionNavItemsComponent } from './addition-nav-items.component';

describe('AdditionNavItemsComponent', () => {
  let component: AdditionNavItemsComponent;
  let fixture: ComponentFixture<AdditionNavItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditionNavItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionNavItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
