import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallbackSectionComponent } from './callback-section.component';

describe('CallbackSectionComponent', () => {
  let component: CallbackSectionComponent;
  let fixture: ComponentFixture<CallbackSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallbackSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CallbackSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
