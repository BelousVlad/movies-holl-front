import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageControllComponent } from './page-controll.component';

describe('PageControllComponent', () => {
  let component: PageControllComponent;
  let fixture: ComponentFixture<PageControllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageControllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageControllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
