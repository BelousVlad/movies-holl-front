import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderNavItemsComponent } from './header-nav-items.component';

describe('HeaderNavItemsComponent', () => {
  let component: HeaderNavItemsComponent;
  let fixture: ComponentFixture<HeaderNavItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderNavItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderNavItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
