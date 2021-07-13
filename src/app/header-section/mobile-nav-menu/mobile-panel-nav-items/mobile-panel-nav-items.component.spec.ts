import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilePanelNavItemsComponent } from './mobile-panel-nav-items.component';

describe('MobilePanelNavItemsComponent', () => {
  let component: MobilePanelNavItemsComponent;
  let fixture: ComponentFixture<MobilePanelNavItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobilePanelNavItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilePanelNavItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
