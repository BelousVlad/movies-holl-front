import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideNewPanelComponent } from './slide-new-panel.component';

describe('SlideNewPanelComponent', () => {
  let component: SlideNewPanelComponent;
  let fixture: ComponentFixture<SlideNewPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlideNewPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideNewPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
