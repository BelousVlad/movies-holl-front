import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelephoneCallbackComponent } from './telephone-callback.component';

describe('TelephoneCallbackComponent', () => {
  let component: TelephoneCallbackComponent;
  let fixture: ComponentFixture<TelephoneCallbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelephoneCallbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelephoneCallbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
