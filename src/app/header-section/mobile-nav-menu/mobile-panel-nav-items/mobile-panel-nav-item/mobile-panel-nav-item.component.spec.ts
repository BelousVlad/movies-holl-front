import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilePanelNavItemComponent } from './mobile-panel-nav-item.component';

describe('MobilePanelNavItemComponent', () => {
  let component: MobilePanelNavItemComponent;
  let fixture: ComponentFixture<MobilePanelNavItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobilePanelNavItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilePanelNavItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
