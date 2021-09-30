import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetPhoneDialogComponent } from './set-phone-dialog.component';

describe('SetPhoneDialogComponent', () => {
  let component: SetPhoneDialogComponent;
  let fixture: ComponentFixture<SetPhoneDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetPhoneDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetPhoneDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
