import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevicesApplicationsSectionComponent } from './devices-applications-section.component';

describe('DevicesApplicationsSectionComponent', () => {
  let component: DevicesApplicationsSectionComponent;
  let fixture: ComponentFixture<DevicesApplicationsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevicesApplicationsSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevicesApplicationsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
