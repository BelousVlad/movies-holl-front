import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialIconsListComponent } from './social-icons-list.component';

describe('SocialIconsListComponent', () => {
  let component: SocialIconsListComponent;
  let fixture: ComponentFixture<SocialIconsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialIconsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialIconsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
