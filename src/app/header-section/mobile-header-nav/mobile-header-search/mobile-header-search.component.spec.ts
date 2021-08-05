import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileHeaderSearchComponent } from './mobile-header-search.component';

describe('MobileHeaderSearchComponent', () => {
  let component: MobileHeaderSearchComponent;
  let fixture: ComponentFixture<MobileHeaderSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileHeaderSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileHeaderSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
