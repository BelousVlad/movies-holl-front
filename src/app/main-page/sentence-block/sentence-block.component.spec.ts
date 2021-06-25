import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentenceBlockComponent } from './sentence-block.component';

describe('SentenceBlockComponent', () => {
  let component: SentenceBlockComponent;
  let fixture: ComponentFixture<SentenceBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SentenceBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SentenceBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
