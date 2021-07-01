import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagSlideComponent } from './tag-slide.component';

describe('TagSlideComponent', () => {
  let component: TagSlideComponent;
  let fixture: ComponentFixture<TagSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagSlideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TagSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
