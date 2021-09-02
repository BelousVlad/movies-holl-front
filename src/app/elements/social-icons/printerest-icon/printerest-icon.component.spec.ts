import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrinterestIconComponent } from './printerest-icon.component';

describe('PrinterestIconComponent', () => {
  let component: PrinterestIconComponent;
  let fixture: ComponentFixture<PrinterestIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrinterestIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrinterestIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
