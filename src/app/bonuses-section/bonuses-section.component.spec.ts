import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonusesSectionComponent } from './bonuses-section.component';

describe('BonusesSectionComponent', () => {
  let component: BonusesSectionComponent;
  let fixture: ComponentFixture<BonusesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BonusesSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BonusesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
